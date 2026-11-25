// Living Memorial records — one object per memorial, rendered by
// src/pages/memorial/[slug].astro through src/components/MemorialPage.astro.
//
// A real memorial record is created by hand from a family's approved
// material (see MEMORIAL-RUNBOOK.md in the Stories research folder):
// only content the commissioning family has reviewed and approved goes
// in a record. Photos live in /public/images/memorial/<slug>/ after a
// human places them there from the private stories-submissions bucket.
//
// Record shape:
//   slug          URL segment: /memorial/<slug>/
//   sample        true → the page carries a visible "Sample memorial"
//                 banner and sample labels; NEVER set on a real memorial
//   name          their full name (the page h1)
//   dates         e.g. '1948 – 2023' (optional)
//   tagline       one line that sounds like them (optional)
//   heroImage     path to their photo (the page is built around it)
//   heroAlt       meaningful alt text for the hero image
//   heroCaption   caption under the hero image (optional)
//   biography     array of paragraph strings — their story
//   quote         { text, attribution } (optional)
//   timeline      [{ when, title, text }] in the order the family wants
//   music         { note, songs: [{ title, note }], embedUrl }
//                 embedUrl: an official player embed (SoundCloud/Spotify)
//                 or null; songs list always renders
//   storyNotes    [{ title, text }] — the small things
//   contributions [{ from, relation, text }] — added by hand, family-approved
//   builtNote     footer line, e.g. 'Built by hand by CC3PO Stories.'

export const memorials = [
  {
    slug: 'sample',
    sample: true,
    name: 'Elena Márquez',
    dates: '1948 – 2023',
    tagline: 'She fed everyone. Then she fed them again.',
    heroImage: '/images/memorial/sample-hero.jpg',
    heroAlt:
      'Placeholder artwork for this sample: a candle glow at the bottom of a dark canvas, with a rose-gold trail of light rising to a single bright star. On a real memorial, this space holds their photo.',
    heroCaption:
      'Sample artwork — on a real memorial, their photo lives here, chosen by their family.',
    biography: [
      'Elena Márquez was born in Modesto in 1948, the third of seven children, and she decided early that the kitchen was the room where a family actually happened. She ran the lunch counter at a truck stop on Highway 99 for eleven years, then a small catering business out of her own kitchen for thirty more — weddings, quinceañeras, funerals, and every Sunday in between.',
      'She was not famous and would have laughed at the word. But on her street in Lathrop, she was the person you called when the baby came early, when the car broke down, when the news was bad. She arrived with food, stayed for the dishes, and left only when somebody laughed for the first time that day.',
      'Elena died in the spring of 2023, at home, with her family close. This page is where her people keep coming back to — her recipes in her own words, the songs she sang over the stove, and the stories that keep getting longer every time they are told.',
    ],
    quote: {
      text: 'Mija, eat first. You can tell me everything after you eat.',
      attribution: '— said at every kitchen table she ever stood in',
    },
    timeline: [
      {
        when: '1948',
        title: 'Born in Modesto',
        text: 'Third of seven children. Learned to cook standing on a stool so she could reach the stove.',
      },
      {
        when: '1966',
        title: 'The Highway 99 lunch counter',
        text: 'Her first job, at eighteen. Truckers started requesting "the girl who remembers orders" — she remembered every regular, and what they were going through.',
      },
      {
        when: '1971',
        title: 'Married Tomás',
        text: 'A courthouse wedding and a backyard reception she catered herself, over his objections. They were married fifty-one years.',
      },
      {
        when: '1989',
        title: 'Elena’s Kitchen opens — at home',
        text: 'Her catering business ran out of her own kitchen for three decades. The tamale assembly line every December was famous on three blocks.',
      },
      {
        when: '2015',
        title: 'The recipe notebook',
        text: 'For her fiftieth family Christmas, she hand-wrote her recipes into notebooks for each of her children — with notes in the margins about who liked what, and why.',
      },
      {
        when: '2023',
        title: 'She is missed, daily',
        text: 'Elena died at home in the spring of 2023. Her family built this page so the stories keep a place to live.',
      },
    ],
    music: {
      note: 'Music was always on in Elena’s kitchen. These are the songs her family says sound like her.',
      songs: [
        {
          title: '“Amor Eterno” — Rocío Dúrcal',
          note: 'Played at every family gathering. Nobody was allowed to talk over it.',
        },
        {
          title: '“Cielito Lindo” — sung, not played',
          note: 'Her version, over the stove, usually with the words slightly wrong and completely certain.',
        },
        {
          title: 'Sunday boleros playlist',
          note: 'The slow Sunday-morning music her grandchildren grew up waking to.',
        },
      ],
      embedUrl: null,
    },
    storyNotes: [
      {
        title: 'The tamale assembly line',
        text: 'Every December, the kitchen became an assembly line: Elena spreading masa, Tomás on the steamer, grandchildren on husk duty, and a strict rule that the first dozen were for whoever walked in hungry. Neighbors timed their visits.',
      },
      {
        title: 'Her driving',
        text: 'Elena drove a 1998 sedan like it was a parade float — slow, waving, stopping for conversations through the window. The whole street planned around it and nobody minded.',
      },
      {
        title: 'The extra chair',
        text: 'There was always one more chair at her table than there were people expected. It was never empty for long.',
      },
    ],
    contributions: [
      {
        from: 'Rosa M.',
        relation: 'granddaughter',
        text: 'She taught me to make her salsa when I was nine, standing on the same stool she learned on. I still call her phone sometimes just to hear her voicemail say my name.',
      },
      {
        from: 'The Herrera family',
        relation: 'neighbors since 1984',
        text: 'When our father was in the hospital, Elena fed our kids for a week and never once made it feel like a favor. It felt like family. It was family.',
      },
    ],
    builtNote: 'This sample was built by hand by CC3PO Stories to show the shape of a Living Memorial.',
  },
];
