import MyLogin from '../index.js';

export default {
  title: 'Example/Login',
  component: MyLogin,
};

const Template = (args, { argTypes }) => ({
  components: { MyLogin },
  template:
    '<MyLogin />',
});

export const LoginYds = Template.bind({});
