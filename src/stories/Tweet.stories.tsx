import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Tweet } from "../components/Tweet/Tweet"

export default {
  title: "Components/Tweet",
  component: Tweet,
} as ComponentMeta<typeof Tweet>

const Template: ComponentStory<typeof Tweet> = (args) => <Tweet {...args} />

export const Sandbox = Template.bind({})
Sandbox.args = {
  createdAt: new Date(),
  displayName: "Jean-Michel",
  text: "Hello World",
}
