db.produtos.updateMany({}, { $set: { criadoPor: "Ronald MacDonald" } });
db.produtos.find({}, { _id: 0, nome: 1, criadoPor: 1 });
