// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['views/project', 'views/slider', 'text!templates/game-of-thrones.html'], function(ProjectView, SliderView, template) {
    'use strict';
    var GameOfThronesView;
    return GameOfThronesView = (function(_super) {
      __extends(GameOfThronesView, _super);

      function GameOfThronesView() {
        return GameOfThronesView.__super__.constructor.apply(this, arguments);
      }

      GameOfThronesView.prototype.template = _.template(template);

      GameOfThronesView.prototype.render = function() {
        this.$el.html(this.template());
        this.initializeSlider();
        this.$el.find('article').addClass('is-visible');
        return this;
      };

      GameOfThronesView.prototype.initializeSlider = function(slider) {
        return _.each($('.slider'), function(slider) {
          return new SliderView({
            el: slider
          });
        });
      };

      return GameOfThronesView;

    })(ProjectView);
  });

}).call(this);
