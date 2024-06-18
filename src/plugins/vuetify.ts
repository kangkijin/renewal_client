import { createVuetify } from "vuetify";

import { VTextField } from "vuetify/components/VTextField";
import { VMenu } from "vuetify/components/VMenu";
import { VList } from "vuetify/components/VList";
import { VDatePicker } from "vuetify/components/VDatePicker";
import { VChip } from "vuetify/components/VChip";
import { VCombobox } from "vuetify/components/VCombobox";

import "vuetify/styles";

const vuetify = createVuetify({
  components: {
    VTextField,
    VMenu,
    VList,
    VDatePicker,
    VChip,
    VCombobox,
  },
  defaults: {
    VCombobox: {
      variant: "text",
      density: "compact",
      hideDetails: "true",
    },
  },
});

export default vuetify;
