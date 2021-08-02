import { MockzillaNode } from "./node";




const runtimeNode = new MockzillaNode("runtime");
const tabsNode = new MockzillaNode("tabs");
export const childrens: { [s: string]: any } = {
    runtime: {
        type: "node",
        value: runtimeNode.getProxy(),
        node: runtimeNode,
    },
    tabs: {
        type: "node",
        value: tabsNode.getProxy(),
        node: tabsNode,
    },
};
