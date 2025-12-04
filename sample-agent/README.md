# sample-agent

※ 事前にuvをインストールしておく必要あり！ ※

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

実行例

以下はデフォルトのまま

```bash
√1764 = 42

This is because 42 × 42 = 1764.AgentResult {
  type: "agentResult",
  stopReason: "endTurn",
  lastMessage: Message {
    type: "message",
    role: "assistant",
    content: [
      [Object ...]
    ],
  },
  toString: [Function: toString],
}
```

以下はシステムプロンプトを設定した時の実行結果例

```bash
The square root of 1764 is 42.

To verify: 42 × 42 = 1764 ✓AgentResult {
  type: "agentResult",
  stopReason: "endTurn",
  lastMessage: Message {
    type: "message",
    role: "assistant",
    content: [
      [Object ...]
    ],
  },
  toString: [Function: toString],
}
```

ストリーミング版の実行例

```bash
Agent response stream:
[Event] beforeInvocationEvent
[Event] messageAddedEvent
[Event] beforeModelCallEvent
[Event] modelStreamEventHook
[Event] modelMessageStartEvent
[Event] modelStreamEventHook
#[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 The Brave Little[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 Toaster of[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 Maple[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 Street

Once[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 upon a time, in a co[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
zy kitchen on Maple Street, there[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 lived a chrome[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 toaster named Spark[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
. While[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 other appl[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
iances bo[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
asted about their digital[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 displays[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 and fancy[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 settings[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
, Spark ha[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d just[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 two[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 slots[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 an[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d a simple dial.[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 But[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 what[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 Spark lacked in features, he[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 made up for in heart[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
.

One[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 winter[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 morning, a[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 small[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 fire[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 started when[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 a[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 dish[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 tow[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
el fell[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 onto[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 the st[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
ove's[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 gas[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 burner. The flames began[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 to sprea[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d while[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 the[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 family[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 sl[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
ept up[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
stairs.[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook


Spark knew he had to act[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 fast.[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 Summ[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
oning all[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 his courage, he po[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
pped his[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 lever[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 up[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 and down repeatedly[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
—[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
*[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
click[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
-[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
click-click-click*—making[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 as[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 much noise as possible. When[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 that[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 didn't work, he pushe[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d his heating[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 elements[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 to[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 maximum[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
,[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 trigg[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
ering the[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 smoke[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 detector[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 above[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 him[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
.

The alarm[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 bl[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
ared.[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 The family w[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
oke an[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d escape[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d safely[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
, calling[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 911.[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook


Firef[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
ighters arrived and put[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 out the bl[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
aze before[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 it consume[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d the house[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
. Though[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 Spark's[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 chrome[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 was[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 scor[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
ched an[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d his lever[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 bent[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 from[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 the heat, he ha[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
d saved the day[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
.

The[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 family[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 kept[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 him[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 on[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 the[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 counter[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 forever[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 after[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
—[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
even[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 when[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 they bought[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 a new four[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
-slice toaster.[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 Because[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 Spark had proven[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 that b[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
ravery isn't about how[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 fancy[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 you[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 are.[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook


It[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
's about what[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 you do when the heat[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 is on.

**[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
The[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 End**[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
 [Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
🍞[Event] modelContentBlockDeltaEvent
[Event] modelStreamEventHook
[Event] modelContentBlockStopEvent
[Event] modelStreamEventHook
[Event] textBlock
[Event] modelStreamEventHook
[Event] modelMessageStopEvent
[Event] modelStreamEventHook
[Event] modelMetadataEvent
[Event] afterModelCallEvent
[Event] messageAddedEvent
[Event] afterInvocationEvent
[Event] agentResult
```

以下、外部ツールを呼び出した時のもの

```bash
🔧 Tool #1: get_weather
✓ Tool completed
The weather in San Francisco is currently 72°F and sunny.AgentResult {
  type: "agentResult",
  stopReason: "endTurn",
  lastMessage: Message {
    type: "message",
    role: "assistant",
    content: [
      [Object ...]
    ],
  },
  toString: [Function: toString],
```

AWS Document MCPを呼び出した時のもの

```bash
[12/04/25 16:02:24] INFO     Processing request of type ListToolsRequest                                                                                                           server.py:709
I'll use the search_documentation tool to search for information about AWS Lambda.
🔧 Tool #1: search_documentation
[12/04/25 16:02:28] INFO     Processing request of type CallToolRequest                                                                                                            server.py:709
[12/04/25 16:02:30] INFO     HTTP Request: POST https://proxy.search.docs.aws.amazon.com/search?session=dccc8958-e7f7-44ee-97de-c6bacda4457f "HTTP/1.1 200 OK"                   _client.py:1740
✓ Tool completed
Great! I used the `search_documentation` tool to search for "AWS Lambda" and found 5 relevant results:

1. **AWS Lambda Documentation** - The main documentation hub for Lambda
2. **AWS Lambda API Reference** - Details about all Lambda API operations
3. **AWS Lambda CLI** - Command-line interface documentation
4. **AWS Lambda Developer Guide** - Comprehensive guide for developers
5. **What is AWS Lambda?** - An introductory page explaining Lambda's capabilities

The search results show that AWS Lambda is used for building scalable web apps, mobile backends, processing data streams, responding to database changes, running scheduled tasks, and more. Would you like me to read any of these documentation pages in detail?AgentResult {
  type: "agentResult",
  stopReason: "endTurn",
  lastMessage: Message {
    type: "message",
    role: "assistant",
    content: [
      [Object ...]
    ],
  },
  toString: [Function: toString],
}
```
