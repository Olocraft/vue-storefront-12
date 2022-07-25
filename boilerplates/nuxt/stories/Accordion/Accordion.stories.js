
import AccordionBase from '../../components/Accordion/AccordionBase.vue';

export default {
  title: 'SFUI Components/Accordion',
  component: AccordionBase,
  parameters: {
    docs: {
      description: {
        component:
          'The accordion component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      defaultValue: true,
      table: {
        category: 'Props',
        defaultValue: {
          summary: true
        }
      },
      description:
        'Toggling expand accordion state'
    },
    buttonText: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Text of accordion button button'
    },
    chevronLeft: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description:
        'Accordion with chevron on the left'
    },
    headerSize: {
      control: 'radio',
      options: ['base', 'lg', 'bold', 'xl'],
      defaultValue: 'lg',
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'lg'
        }
      },
      description:
        'Accordion with chevron on the left'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { AccordionBase },
  props: Object.keys(argTypes),
  data() {
    return {
      opened: this.expanded
    };
  },
  methods: {
    handleExpanded() {
      this.opened = !this.opened;
    }
  },
  template: `
  <div class="w-80">
    <AccordionBase
      :expanded="opened"
      :buttonText="buttonText"
      @toggle="handleExpanded"
      :chevronLeft="chevronLeft"
      :headerSize="headerSize"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AccordionBase>
  </div>
    `
});

export const Base = Template.bind({});

Base.args = {
  buttonText: 'Accordion Header'
};

const Multiple = (args, { argTypes }) => ({
  components: { AccordionBase },
  props: Object.keys(argTypes),
  data() {
    return {
      opened: {
        acc1: true,
        acc2: true,
        acc3: true
      },
      buttonText1: 'Accordion Header 1',
      buttonText2: 'Accordion Header 2',
      buttonText3: 'Accordion Header 3'
    };
  },
  methods: {
    handleExpanded() {
      this.opened = !this.opened;
    }
  },
  template: `
    <div class="w-80">
      <AccordionBase
        :expanded="opened.acc1"
        :buttonText="buttonText1"
        @toggle="opened.acc1 = !opened.acc1"
        class="mb-2"
        :chevronLeft="chevronLeft"
        :headerSize="headerSize"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </AccordionBase>
      <AccordionBase
        :expanded="opened.acc2"
        :buttonText="buttonText2"
        @toggle="opened.acc2 = !opened.acc2"
        class="mb-2"
        :chevronLeft="chevronLeft"
        :headerSize="headerSize"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </AccordionBase>
      <AccordionBase
        :expanded="opened.acc3"
        :buttonText="buttonText3"
        @toggle="opened.acc3 = !opened.acc3"
        :chevronLeft="chevronLeft"
        :headerSize="headerSize"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </AccordionBase>
    </div>
    `
});

export const MultipleAccordions = Multiple.bind({});
