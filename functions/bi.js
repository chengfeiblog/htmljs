// Generated by CoffeeScript 1.9.3
(function() {
  var BIHistory, User, func_bi;

  BIHistory = __M('bi_history');

  User = __M('users');

  BIHistory.sync();

  func_bi = {
    add: function(data, callback) {
      User.find({
        where: {
          id: data._user_id
        }
      }).success(function(u) {
        if (u) {
          return u.updateAttributes({
            bi: u.bi * 1 + count
          });
        }
      });
      return BIHistory.create({
        user_id: data.user_id,
        count: data.count,
        day: (new Date()).getTime() / 1000 * 60 * 60 * 24,
        reason: data.reason,
        from_title: data.title,
        from_user_nick: data.form_user_nick
      }).success(function(his) {
        return callback && callback(null, his);
      }).error(function(e) {
        return callback && callback(e);
      });
    }
  };

  __FC(func_bi, BIHistory, ['getAll', 'count']);

  module.exports = func_bi;

}).call(this);
