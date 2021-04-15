Component({
  options: {
      addGlobalClass: true,
      pureDataPattern: /^_/,
  },
  properties: {
      tabs: { type: Array, value: [] },
      tabActiveTextColor: { type: String, value: '#FB7299' },
      tabInactiveTextColor: { type: String, value: '#000000' },
      tabActiveBackgroundColor: { type: String, value: '#efefef' },
      tabInactiveBackgroundColor: { type: String, value: '#ffffff' },
      activeTab: { type: Number, value: 0 },
  },
  data: {
      currentView: 0
  },
  observers: {
      activeTab: function activeTab(_activeTab) {
          var len = this.data.tabs.length;
          if (len === 0) return;
          var currentView = _activeTab - 1;
          if (currentView < 0) currentView = 0;
          if (currentView > len - 1) currentView = len - 1;
          this.setData({ currentView: currentView });
      }
  },

  methods: {
      handleTabClick: function handleTabClick(e) {
          var index = e.currentTarget.dataset.index;
          this.setData({ activeTab: index });
          this.triggerEvent('tabclick', { index: index });
      },
      handleSwiperChange: function handleSwiperChange(e) {
          var index = e.detail.current;
          this.setData({ activeTab: index });
          this.triggerEvent('change', { index: index });
      }
  }
});