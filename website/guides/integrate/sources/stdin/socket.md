---
last_modified_on: "2020-03-27"
$schema: "/.meta/.schemas/guides.json"
title: "Send logs from STDIN to a TCP, UDP, or UDS socket"
description: "A guide to quickly, and correctly, send logs from STDIN to a TCP, UDP, or UDS socket."
author_github: https://github.com/binarylogic
tags: ["type: tutorial","domain: sources","domain: sinks","source: stdin","sink: socket"]
---

import ConfigExample from '@site/src/components/ConfigExample';
import InstallationCommand from '@site/src/components/InstallationCommand';

> "I just wanna, like, send my logs from STDIN to a TCP, UDP, or UDS socket -- why is all of this so complicated?"
>
> — developers

So you want to send logs from STDIN to a TCP, UDP, or UDS socket? Sounds simple! Sadly, it is not.
When you account for x, y, and z, you quickly realize this is no easy endaevor.
Especially for high volume product environments! Fear not! This guide will get
you up and running in minutes.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/integrate/sources/stdin/socket.md.erb
-->

## What We'll Accomplish

<ol className="list--checks list--lg list--semi-bold list--primary list--flush">
  <li>
    Accept new line delimited log data through STDIN.
    <ol>
      <li>Automatically enrich logs with host-level context.</li>
    </ol>
  </li>
  <li>
    Stream logs over a TCP, UDP, or Unix socket.
    <ol>
      <li>Buffer your data in-memory or on-disk for performance and durability.</li>
    </ol>
  </li>
  <li className="list--li--arrow list--li--pink">All in just a few minutes. Let's get started!</li>
</ol>

## How It Works

_sidecar.md.erb

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
  sourceName={"stdin"}
  sinkName={"socket"} />

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


