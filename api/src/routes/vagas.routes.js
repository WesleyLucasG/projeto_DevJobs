const { Router } = require('express');
const router = Router();

const vagasMock = [
    { id: 1, titulo: 'Dev Frontend React', empresa: 'TechNova', tipo: 'remoto' }
];

router.get('/', (req, res) => {
    const vagas = db.prepare(
        SELECT vagasMock.*. e, nome As empresa_nome
        from vagas v
        JOIN empresas e ON e.id = v.empresa.id
        ORDER By v.crea
    )
    res.json(vagasMock);
});

module.exports = router;