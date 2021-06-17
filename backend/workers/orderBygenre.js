function orderBygenre(data) {
    var mock = []
    var types = ["action", "romance", "fiction", "biography",
        "horror", "poetry", "anthem", "sonnet", "satire",
        "technician", "fable", "literature", "drama"]
    var historyByGenre = data.map((e, i) => {

        switch (e.genero) {

            case "action": mock.push({ action: e })
                break;
            case "romance": mock.push({ romance: e })
                break;
            case "fiction": mock.push({ fiction: e })
                break;
            case "biography": mock.push({ biography: e })
                break;
            case "horror": mock.push({ horror: e })
                break;
            case "poetry": mock.push({ poetry: e })
                break;
            case "anthem": mock.push({ anthem: e })
                break;
            case "sonnet": mock.push({ sonnet: e })
                break;
            case "satire": mock.push({ satire: e })
                break;
            case "technician": mock.push({ technician: e })
                break;

            case "fable": mock.push({ fable: e })
                break;
            case "literature": mock.push({ literature: e })
                break;
            case "drama": mock.push({ drama: e })
                break;

            default:
        }
    })
    var action = []
    var romance = []
    var fiction = []
    var biography = []
    var horror = []
    var poetry = []
    var anthem = []
    var sonnet = []
    var satire = []
    var technician = []
    var fable = []
    var literature = []
    var drama = []
    var h = []
    var newObj = mock.map(e => {
        for (var i = 0; i <= types.length; i++) {
            if (e[types[i]]) {
                h.push(e[types[i]])

            }
        }


        if (e.action) {
            action.push(e.action)
        }
        if (e.romance) {
            romance.push(e.romance)
        }
        if (e.fiction) {
            fiction.push(e.fiction)
        }
        if (e.biography) {
            biography.push(e.biography)
        }
        if (e.horror) {
            horror.push(e.horror)
        }
        if (e.poetry) {
            poetry.push(e.poetry)
        }
        if (e.anthem) {
            anthem.push(e.anthem)
        }
        if (e.sonnet) {
            sonnet.push(e.sonnet)
        }
        if (e.satire) {
            satire.push(e.satire)
        }
        if (e.technician) {
            technician.push(e.technician)
        }
        if (e.fable) {
            fable.push(e.fable)
        }
        if (e.literature) {
            literature.push(e.literature)
        }
        if (e.drama) {
            drama.push(e.drama)
        }
    })
    var historys = {
        action: action,
        romance: romance,
        fiction: fiction,
        biography: biography,
        horror: horror,
        poetry: poetry,
        anthem: anthem,
        sonnet: sonnet,
        satire: satire,
        technician: technician,
        fable: fable,
        literature: literature,
        drama: drama
    }

    return historys;
}
module.exports = orderBygenre;