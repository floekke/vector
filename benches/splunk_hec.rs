use criterion::*;
use vector::sinks::splunk_hec::{HecSinkConfig, Encoding};
use vector::test_util::runtime;
use vector::sinks::util::encoding::EncodingConfigWithDefault;
use vector::sinks::util::{Compression, BatchBytesConfig};
use string_cache::DefaultAtom as Atom;
use vector::topology::SinkContext;
use vector::buffers::Acker;
use vector::dns::Resolver;
use vector::sinks::util::http::HttpSink;
use vector::event::{Event, LogEvent, Value};



fn benchmark_encode(c: &mut Criterion) {

    let config = HecSinkConfig {
        token: "".to_string(),
        host: "".to_string(),
        host_key: Default::default(),
        indexed_fields: vec![],
        index: None,
        encoding: Encoding::Text.into(),
        compression: None,
        batch: Default::default(),
        request: Default::default(),
        tls: None
    };

    let events = vec!(Event::from("hello world"); 10000);

    c.bench_function("hec-encode-event", move |b| {
        b.iter_batched(|| events.clone(), |data| {
            for event in data {
                config.encode_event(event);
            }
        }, BatchSize::SmallInput);
    });

}

criterion_group!(hec_encode, benchmark_encode);


