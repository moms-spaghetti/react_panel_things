import { LoremIpsum } from 'lorem-ipsum'
import { v4 as uuidv4 } from 'uuid'


const lorem = new LoremIpsum({
    sentencesPerParagraph:{
        max: 3,
        min: 1
    },
    wordsPerSentence: {
        max: 15,
        min: 5
    }
})

const things = [
    {
        id: uuidv4(),
        name: 'tiny thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'small thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'atomic thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'miniscule thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'mini thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'smallish thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'big thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'medium thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'giant thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'tall thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'short thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'moderate thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
    {
        id: uuidv4(),
        name: 'another thing',
        desc: lorem.generateParagraphs(2),
        parts: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        imgurl: 'https://source.unsplash.com/random'
    },
]

export default things