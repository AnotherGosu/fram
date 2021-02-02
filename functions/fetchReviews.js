const client = require("../client");

exports.handler = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "review",
      select: "sys.id,fields",
    });

    const items = [...entries.items];
    const reviews = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      return {
        ...item.fields,
        images,
        id,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(reviews),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
