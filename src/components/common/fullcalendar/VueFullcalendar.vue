<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
// import koLocale from "@fullcalendar/core/locales/ko";
import "@/assets/css/lib/vue_calendar/vue-calendar.css";

export default {
  components: {
    FullCalendar,
  },
  props: {
    events: Array,
  },
  computed: {
    calendarOptions() {
      const vm = this;
      // events: [{ title: "퇴근", start: new Date() }],
      return {
        plugins: [dayGridPlugin, interactionPlugin],
        selectable: true,
        headerToolbar: {
          left: "prev",
          center: "title",
          right: "next",
        },
        initialView: "dayGridMonth",
        // locale: koLocale,
        weekends: true, //주말표출
        events: vm.events,
        titleFormat: function (date) {
          return date.date.year + "/" + (date.date.month + 1);
        },
      };
    },
  },
};
</script>
