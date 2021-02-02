const client = require("../client");

exports.handler = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "news",
      select: "sys.id,fields",
    });

    const items = [...entries.items];
    const news = items.map((item) => {
      const id = item.sys.id;
      const preview = item.fields.preview.fields.file.url;
      return {
        ...item.fields,
        preview,
        id,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(news),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
