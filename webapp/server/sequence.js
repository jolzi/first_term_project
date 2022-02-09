class Sequence
{
    constructor()
    {
        this.sequence = 
        [
            ['positive', '1', 1],
            ['positive', '2', 2],
            ['positive', 'funny', 3],
            ['positive', '2', 4],
            ['positive', '3', 5],
            ['negative', '3', 6],
            ['positive', '1', 7],
            ['positive', '3', 8],
            ['negative', '2', 9],
            ['positive', '1', 10],
            ['positive', '2', 11],
            ['negative', '2', 12],
            ['positive', '1', 13],
            ['positive', '1', 14],
            ['negative', '3', 15],
            ['negative', '1', 16],
            ['negative', '1', 17],
            ['negative', '2', 18],
            ['negative', '1', 19.0],
            ['negative', '1', 19.1],
            ['negative', '2', 19.2],
            ['negative', '2', 19.3],
            ['negative', '2', 19.4],
            ['negative', '3', 19.5],
            ['negative', '3', 19.6],
            ['negative', '3', 19.7],
            ['negative', '3', 19.8]
        ]
    }

    getTone(index)
    {
        return this.sequence[index][0];
    }

    getIntensity(index)
    {
        return this.sequence[index][1];
    }

    get length()
    {
        return this.sequence.length;
    }
}

module.exports = Sequence