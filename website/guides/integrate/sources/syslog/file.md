---
last_modified_on: "2020-03-27"
$schema: "/.meta/.schemas/guides.json"
title: "Send logs from Syslog to a file"
description: "A guide to quickly, and correctly, send logs from Syslog to a file."
author_github: https://github.com/binarylogic
tags: ["type: tutorial","domain: sources","domain: sinks","source: syslog","sink: file"]
---

import ConfigExample from '@site/src/components/ConfigExample';
import InstallationCommand from '@site/src/components/InstallationCommand';

> "I just wanna, like, send my logs from Syslog to a file -- why is all of this so complicated?"
>
> — developers

So you want to send logs from Syslog to a file? Sounds simple! Sadly, it is not.
When you account for x, y, and z, you quickly realize this is no easy endaevor.
Especially for high volume product environments! Fear not! This guide will get
you up and running in minutes.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/integrate/sources/syslog/file.md.erb
-->

## What We'll Accomplish

<ol className="list--checks list--lg list--semi-bold list--primary list--flush">
  <li>
    Accept log data over the Syslog protocol via TCP, UDP, or Unix sockets.
    <ol>
      <li>Automatically parse Syslog 3164 and 5424 formats.</li>
    </ol>
  </li>
  <li>
    Write logs to files.
    <ol>
      <li>Dynamically partition logs across multiple files.</li>
    </ol>
  </li>
  <li className="list--li--arrow list--li--pink">All in just a few minutes. Let's get started!</li>
</ol>

## How It Works

_service.md.erb

## Tutorial

<div className="steps steps--h3">

<ol>
<li>

### Install Vector

<InstallationCommand />

</li>
<li>

### Configure Vector

<ConfigExample
  format="toml"
  path="vector.toml"
  sourceName={"syslog"}
  sinkName={"file"} />

</li>
<li>

### Start Vector

```bash
vector --config vector.toml
```

That's it! Simple and to the point. Hit `ctrl+c` to exit.

</li>
</ol>

</div>


