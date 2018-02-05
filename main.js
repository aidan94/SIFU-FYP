import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/profile');
Router.route('/home');
Router.route('/login');
Router.route('/signup');

Router.configure({
    layoutTemplate: 'main'
});

//Template.signup.events({
  //'submit'
//})

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});
