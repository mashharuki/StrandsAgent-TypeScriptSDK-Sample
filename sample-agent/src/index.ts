import { Agent } from '@strands-agents/sdk'
import { 
    weatherTool,
    documentationTools
} from "./tools";

/**
 * メイン関数
 */
const main = async() => {
    // Create agent (uses default Amazon Bedrock provider)
    const agent = new Agent({
        systemPrompt: 'You are a helpful assistant.',
        tools: [
            weatherTool,
            documentationTools
        ]
    })

    // Invoke
    // const result = await agent.invoke('What is the square root of 1764?')
    // console.log(result);

    // Invoke Tool & MCP
    // const result2 = await agent.invoke('What is the weather in San Francisco?')
    // console.log(result2);

    const result3 = await agent.invoke("Use a random tool from the MCP server.");
    console.log(result3);

    await documentationTools.disconnect();
    
    // console.log('Agent response stream:');
    // for await (const event of agent.stream('Tell me a story about a brave toaster.')) {
    //     console.log('[Event]', event.type)
    // };


};

main();