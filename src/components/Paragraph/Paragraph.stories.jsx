import Paragraph from "./Paragraph";

export default {
  title: "components/Paragraph",
  component: Paragraph,
  args: {
    children: "Paragraph",
    variant: "primary"
  },
};

const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind();

export const Secondary = Template.bind();

Secondary.args = {
  variant: "secondary"
}

export const Tertiary = Template.bind();

Tertiary.args = {
  variant: "tertiary"
}