const express = require("express");
const app = express();

app.get("/mock-payment", (req, res) => {
  const { user, product } = req.query;

  if (!user || !product) {
    return res.json({
      status: "error",
      message: "Missing user or product"
    });
  }

  const txnId = "TXN" + Math.floor(100000 + Math.random() * 900000);

  res.json({
    status: "success",
    transaction_id: txnId,
    user_name: user,
    accessory: product
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});