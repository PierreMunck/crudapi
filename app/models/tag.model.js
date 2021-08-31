const sql = require("./db.js");

const Tag = function(tag) {
    this.name = tag.name;
};

Tag.create = async (newTag, result) => {
    sql.query("INSERT INTO Tags SET ?", newTag, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created Tag: ", { id: res.insertId, ...newTag });
      result(null, { id: res.insertId, ...newTag });
    });
  };

  Tag.findById = async (tagId, result) => {
    sql.query(`SELECT * FROM Tags WHERE id = ${tagId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Tag: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Sighting with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Tag.findByName = async (tagName, result) => {
    sql.query(`SELECT * FROM Tags WHERE name = '${tagName}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Tag: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Sighting with the id
      result({ kind: "not_found" }, null);
    });
  };

  Tag.findByNames = async (nameList, result) => {
    sql.query(`SELECT * FROM Tags WHERE id IN ${nameList}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      result(null, res);
    });
  };

  Tag.getAll = async result => {
    sql.query("SELECT * FROM Tags", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("tag: ", res);
      result(null, res);
    });
  };
module.exports = Tag;