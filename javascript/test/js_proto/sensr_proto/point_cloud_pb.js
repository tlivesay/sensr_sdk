// source: sensr_proto/point_cloud.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.sensr_proto.PointResult', null, global);
goog.exportSymbol('proto.sensr_proto.PointResult.PointCloud', null, global);
goog.exportSymbol('proto.sensr_proto.PointResult.PointCloud.Type', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensr_proto.PointResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensr_proto.PointResult.repeatedFields_, null);
};
goog.inherits(proto.sensr_proto.PointResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensr_proto.PointResult.displayName = 'proto.sensr_proto.PointResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sensr_proto.PointResult.PointCloud = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensr_proto.PointResult.PointCloud, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensr_proto.PointResult.PointCloud.displayName = 'proto.sensr_proto.PointResult.PointCloud';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensr_proto.PointResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensr_proto.PointResult.prototype.toObject = function(opt_includeInstance) {
  return proto.sensr_proto.PointResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensr_proto.PointResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensr_proto.PointResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    proto.sensr_proto.PointResult.PointCloud.toObject, includeInstance),
    uri: jspb.Message.getFieldWithDefault(msg, 201, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensr_proto.PointResult}
 */
proto.sensr_proto.PointResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensr_proto.PointResult;
  return proto.sensr_proto.PointResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensr_proto.PointResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensr_proto.PointResult}
 */
proto.sensr_proto.PointResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sensr_proto.PointResult.PointCloud;
      reader.readMessage(value,proto.sensr_proto.PointResult.PointCloud.deserializeBinaryFromReader);
      msg.addPoints(value);
      break;
    case 201:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensr_proto.PointResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensr_proto.PointResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensr_proto.PointResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensr_proto.PointResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sensr_proto.PointResult.PointCloud.serializeBinaryToWriter
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      201,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sensr_proto.PointResult.PointCloud.prototype.toObject = function(opt_includeInstance) {
  return proto.sensr_proto.PointResult.PointCloud.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sensr_proto.PointResult.PointCloud} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensr_proto.PointResult.PointCloud.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    points: msg.getPoints_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sensr_proto.PointResult.PointCloud}
 */
proto.sensr_proto.PointResult.PointCloud.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensr_proto.PointResult.PointCloud;
  return proto.sensr_proto.PointResult.PointCloud.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensr_proto.PointResult.PointCloud} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensr_proto.PointResult.PointCloud}
 */
proto.sensr_proto.PointResult.PointCloud.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sensr_proto.PointResult.PointCloud.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sensr_proto.PointResult.PointCloud.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sensr_proto.PointResult.PointCloud.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensr_proto.PointResult.PointCloud} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensr_proto.PointResult.PointCloud.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPoints_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sensr_proto.PointResult.PointCloud.Type = {
  NONE: 0,
  GROUND: 1,
  ENVIRONMENT: 2,
  RAW: 3
};

/**
 * optional Type type = 1;
 * @return {!proto.sensr_proto.PointResult.PointCloud.Type}
 */
proto.sensr_proto.PointResult.PointCloud.prototype.getType = function() {
  return /** @type {!proto.sensr_proto.PointResult.PointCloud.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sensr_proto.PointResult.PointCloud.Type} value
 * @return {!proto.sensr_proto.PointResult.PointCloud} returns this
 */
proto.sensr_proto.PointResult.PointCloud.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.sensr_proto.PointResult.PointCloud.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensr_proto.PointResult.PointCloud} returns this
 */
proto.sensr_proto.PointResult.PointCloud.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes points = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sensr_proto.PointResult.PointCloud.prototype.getPoints = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes points = 3;
 * This is a type-conversion wrapper around `getPoints()`
 * @return {string}
 */
proto.sensr_proto.PointResult.PointCloud.prototype.getPoints_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPoints()));
};


/**
 * optional bytes points = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPoints()`
 * @return {!Uint8Array}
 */
proto.sensr_proto.PointResult.PointCloud.prototype.getPoints_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPoints()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sensr_proto.PointResult.PointCloud} returns this
 */
proto.sensr_proto.PointResult.PointCloud.prototype.setPoints = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated PointCloud points = 1;
 * @return {!Array<!proto.sensr_proto.PointResult.PointCloud>}
 */
proto.sensr_proto.PointResult.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.sensr_proto.PointResult.PointCloud>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensr_proto.PointResult.PointCloud, 1));
};


/**
 * @param {!Array<!proto.sensr_proto.PointResult.PointCloud>} value
 * @return {!proto.sensr_proto.PointResult} returns this
*/
proto.sensr_proto.PointResult.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sensr_proto.PointResult.PointCloud=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensr_proto.PointResult.PointCloud}
 */
proto.sensr_proto.PointResult.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sensr_proto.PointResult.PointCloud, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensr_proto.PointResult} returns this
 */
proto.sensr_proto.PointResult.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};


/**
 * optional string uri = 201;
 * @return {string}
 */
proto.sensr_proto.PointResult.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 201, ""));
};


/**
 * @param {string} value
 * @return {!proto.sensr_proto.PointResult} returns this
 */
proto.sensr_proto.PointResult.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 201, value);
};


goog.object.extend(exports, proto.sensr_proto);