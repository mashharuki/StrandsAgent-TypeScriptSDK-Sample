import { Agent, tool, McpClient  } from '@strands-agents/sdk'
import { z } from 'zod'
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

/**
 * 天気予報を取得する外部ツール
 */
const weatherTool = tool({
  name: 'get_weather',
  description: 'Get the current weather for a specific location.',
  inputSchema: z.object({
    location: z.string().describe('The city and state, e.g., San Francisco, CA'),
  }),
  callback: (input) => {
    // input is fully typed based on the Zod schema
    return `The weather in ${input.location} is 72°F and sunny.`
  },
})

/**
 * AWS Document MCPサーバーを利用するためのMCPクライアントの設定
 */
const documentationTools = new McpClient({
  transport: new StdioClientTransport({
    command: "uvx",
    args: ["awslabs.aws-documentation-mcp-server@latest"],
  }),
});

export {
    weatherTool,
    documentationTools
}

