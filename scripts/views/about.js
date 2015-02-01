// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['text!templates/about.html'], function(template) {
    'use strict';
    var AboutView;
    return AboutView = (function(_super) {
      __extends(AboutView, _super);

      function AboutView() {
        return AboutView.__super__.constructor.apply(this, arguments);
      }

      AboutView.prototype.el = '.main';

      AboutView.prototype.template = _.template(template);

      AboutView.prototype.initialize = function() {
        return this.render();
      };

      AboutView.prototype.destroy = function() {
        return console.log('destroy');
      };

      AboutView.prototype.render = function() {
        this.$el.html(this.template());
        return this;
      };

      return AboutView;

    })(Backbone.View);
  });

}).call(this);
