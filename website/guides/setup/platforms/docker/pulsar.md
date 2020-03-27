---
last_modified_on: "2020-03-26"
$schema: "/.meta/.schemas/guides.json"
title: "Send Docker logs to Apache Pulsar"
description: "A guide to quickly, and correctly, send Docker logs to Apache Pulsar."
author_github: https://github.com/binarylogic
tags: ["domain: config","source: docker","sink: pulsar"]
---

import CodeExplanation from '@site/src/components/CodeExplanation';
import ConfigExample from '@site/src/components/ConfigExample';
import SVG from 'react-inlinesvg';

> "I just wanna, like, send my Docker logs to Apache Pulsar -- why is all of this so complicated?"
>
> — developers

So you want to send Docker logs to Apache Pulsar? Sounds simple! Sadly, it is not.
When you account for x, y, and z, you quickly realize this is no easy endaevor.
Especially for high volume product environments! Fear not! This guide will get
you up and running in minutes.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/setup/platforms/docker/pulsar.md.erb
-->

## What We'll Accomplish

<ol className="list--checks list--lg list--semi-bold list--primary list--flush">
  <li>
    Collect Docker container logs.
    <ol>
      <li>Filter which containers you collect them from.</li>
      <li>Automatically merge logs that Docker splits.</li>
      <li>Enrich your logs with useful Docker context.</li>
    </ol>
  </li>
  <li>
    Send logs to Apache Pulsar.
    <ol>
      <li>Stream data in a real-time fashion.</li>
      <li>Automatically retry failed requests, with backoff.</li>
    </ol>
  </li>
  <li className="list--li--arrow list--li--pink">All in just a few minutes. Let's get started!</li>
</ol>

## How It Works

<SVG src="/img/deployment-strategies-docker-daemon.svg" />

As shown in the diagram above, we'll be deploying [Vector][urls.vector_website]
as a [daemon][docs.strategies.daemon] to collect all of your Docker logs on a
single host. We'll deploy Vector in it's own container, just like your other
services, so that your workflow doesn't deviate.

## A Step-By-Step Tutorial

<div className="steps steps--h3">

1. ### Configure Vector

   <ConfigExample
    format="toml"
    path="vector.toml"
    sourceName={"docker"}
    sinkName={"pulsar"} />

2. ### Start the Vector container

   ```bash
   docker run \
     -v $PWD/vector.toml:/etc/vector/vector.toml:ro \
     -v /var/run/docker.sock:/var/run/docker.sock \
     timberio/vector:latest-alpine
   ```

   <CodeExplanation>

   * The `-v $PWD/vector.to...` flag passes your custom configuration to Vector.
   * The `-v /var/run/docke...` flag ensures that Vector has access to the Docker API.
   * The `timberio/vector:latest-alpine` is the default image we've chosen, you are welcome to use [other image variants][docs.platforms.docker#variants].

   </CodeExplanation>

   That's it! Simple and to the point. Hit `ctrl+c` to exit.

</div>


[docs.platforms.docker#variants]: /docs/setup/installation/platforms/docker/#variants
[docs.strategies.daemon]: /docs/setup/deployment/strategies/daemon/
[urls.vector_website]: https://vector.dev