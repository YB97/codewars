//KATA: Shortest Word
var str = 'bitcoin take over the world maybe who knows perhaps'


function findShort(s){
    return Math.min(...s.split(' ').map(w => w.length));
}
