const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router();

//Ajout d'une categorie
router.post('/', async (req, res, )=> {
const {nomcategorie,imagecategorie}=req.body
try {
const categorie = await prisma.categories.create({
data: {
nomcategorie: nomcategorie,
imagecategorie: imagecategorie
}
})
res.json(categorie)
} catch (error) {
res.status(500).json({
message: "Something went wrong",
})
}
});
// afficher la liste des catégories.
router.get('/', async (req, res, )=> {
try {
// categories est le nom du model précisé dans prisma.schema
const categorie = await prisma.categories.findMany()
res.json(categorie)
} catch (error) {
res.status(500).json({
message: "Something went wrong",
})
}
});
// afficher une categorie.
router.get('/:id', async (req, res, )=> {
const { id } = req.params
try {
const categorie = await prisma.categories.findUnique({
where: {
id: Number(id),
}
})
res.json(categorie)
} catch (error) {
res.status(500).json({
message: "Something went wrong",
})

}
});

// modifier une categorie
router.put('/:id', async (req, res)=> {
const {nomcategorie,imagecategorie}=req.body
const id = req.params.id;
try {
const categorie = await prisma.categories.update({
data: {
nomcategorie: nomcategorie,
imagecategorie: imagecategorie
},
where: { id: Number(id)},
})
res.json(categorie);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// Supprimer un categories
router.delete('/:id', async (req, res)=> {
const id = req.params.id;
try {
await prisma.categories.delete({
where: { id: Number(id) },
})
res.json({ message: "category "+ id +" deleted successfully." });
} catch (error) {
res.status(404).json({ message: error.message });
}
});
module.exports = router;