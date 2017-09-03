module.exports = (sequelize, DataTypes) => {
  return sequelize.define("House", {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "house_name"
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },
    function: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: "house_function"
    },
    transtype: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: "transaction_type"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "price"
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "unit"
    },
    prov: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: "prov"
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "city"
    },
    district: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "district"
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "address"
    },
    builtYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "built_year"
    },
    builtType: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: "built_type"
    },
    builtStructure: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "builtStructure"
    },
    bedRoom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "bedroom"
    },
    livingRoom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "living_room"
    },
    toilet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "toilet"
    },
    kitchen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "kitchen"
    },
    orientation: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "orientation"
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "area"
    },
    usedArea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "used_area"
    },
    yardArea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "yard_area"
    },
    houseStructure: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: "house_structure"
    },
    facilities: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "facilities"
    },
    decoration: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "decoration"
    },
    neighborhoods: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "neighborhoods"
    },
    propertyCompany: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "property_company"
    },
    isElevator: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "is_elevator"
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "floor"
    },
    propElevator: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: "prop_elevator"
    },
    isMortgage: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "is_mortgage"
    },
    rightValid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "house_right_valid"
    },
    rightType: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "house_right_type"
    },
    landOwnerValid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "land_ownership_valid"
    },
    landOwnerType: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "land_ownership_type"
    },
    imageFile: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "file_name"
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "phone"
    },
    extra_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "extra_id"
    },
    inputTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "input_time"
    },
    auditTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "audit_time"
    },
    releaseTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "release_time"
    },
    auditState: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "audit_state"
    },
    auditEmployee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "audit_employee"
    },
    releaseState: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "release_state"
    },
    isValid: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: "is_valid"
    }
  }, {
    freezeTableName: true
  });
};