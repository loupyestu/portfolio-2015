// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['views/project', 'text!templates/jperriere-2014.html'], function(ProjectView, template) {
    'use strict';
    var JPerriere2014View;
    return JPerriere2014View = (function(_super) {
      __extends(JPerriere2014View, _super);

      function JPerriere2014View() {
        return JPerriere2014View.__super__.constructor.apply(this, arguments);
      }

      JPerriere2014View.prototype.template = _.template(template);

      JPerriere2014View.prototype.render = function() {
        this.$el.html(this.template());
        this.$el.find('article').addClass('is-visible');
        return this;
      };

      return JPerriere2014View;

    })(ProjectView);
  });

}).call(this);
