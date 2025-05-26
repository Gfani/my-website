const poems = [
  {
    title: "I See Humans, Not Humanity",
    content: `I walk through streets where silence screams,  
In concrete jungles built from dreams.  
A thousand faces pass me by,  
But not a soul will catch my eye.  

They rush and run and never feel,  
Their laughter sharp, their kindness steel.  
Phones in hand, yet hearts alone,  
We text, we scroll, we break our own.  

I see a child who’s lost and scared,  
But eyes look past, like no one cared.  
A hand could help, a word could heal,  
Yet no one stops to think or feel.  

We build our walls and close our doors,  
Compete in grief, compare our wars.  
And when compassion dares to speak,  
It's mocked as soft, it's seen as weak.  

But what is strength if love is gone?  
What are we fighting battles on?  
I see humans, dressed in pride,  
But the humanity... has stepped aside.`,
  },
  {
    title: "Whispers of the Wind",
    content: `The wind it whispers through the trees,  
A voice as soft as morning breeze.  
It dances through the golden field,  
Where time and thought are gently healed.  

It tells of tales from long ago,  
Of tears that fell, of hearts that glow.  
It hums through cracks in old stone walls,  
And sings to leaves as autumn falls.  

It moves through windows late at night,  
A lullaby in silver light.  
It knows the words we never say,  
And carries broken dreams away.  

It swirls with laughter in the air,  
And comforts pain we cannot bear.  
It touches cheeks and dries a tear,  
A friend unseen, forever near.  

And when I’m lost in storms within,  
I close my eyes… and hear the wind.`,
  },
  {
    title: "Falling into True Love",
    content: `I didn’t plan to fall this way,  
It started like a gentle day.  
A smile, a word, a fleeting glance,  
And somehow I was caught in trance.  

You weren’t a flame that burned too bright,  
But steady warmth and quiet light.  
You didn’t shout or stake your claim,  
But whispered softly, all the same.  

I watched you laugh with no disguise,  
And found the stars inside your eyes.  
You saw my flaws, you saw my scars,  
And still you reached between the bars.  

My walls you broke, not with a fight,  
But with your presence, calm and right.  
You turned my fear into a song,  
That sang of home where hearts belong.  

And now, I walk a softer road,  
Because your love has eased my load.  
I didn’t mean to fall so fast...  
But with you here, I hope it lasts.`,
  },
   {
    title: "Echoes of Silence",
    content: `In crowded rooms, I hear the silent cries,
Words left unsaid beneath the empty skies.
A glance, a touch, a moment left to yearn,
In stillness, hearts wait quietly to learn.

The loudest voices drown the whispered plea,
But silence holds the truths we fail to see.
Within the calm, a universe expands—
Of secret hopes held gently in our hands.

When noise is gone, the quiet speaks so clear,
Echoes of love and sorrow, hope and fear.
In silence lies the depth of what we feel,
A sacred space where broken souls can heal.`
  },
  {
    title: "Dance of the Leaves",
    content: `Leaves twirl down in autumn’s golden light,
A graceful dance before the coming night.
Each one a story, whispered soft and low,
Of seasons passed and places we will go.

They float on air with effortless delight,
A fleeting beauty in their final flight.
In every fall, a chance to start anew—
The dance of leaves, the sky’s own rendezvous.

Beneath the boughs, we watch them swirl and spin,
A fleeting moment where all life begins.
In their descent, a silent, tender grace,
The endless cycle of our human race.`
  },
  {
    title: "Love’s Quiet Morning",
    content: `Morning breaks with sunlight in your eyes,
A gentle warmth that never says goodbyes.
No grand gestures, just a steady flame,
That burns with kindness, never seeks acclaim.

In quiet moments, love reveals its art—
A tender touch that mends the broken heart.
With every breath, a promise softly kept,
In love’s quiet morning, peacefully slept.

The world may roar with chaos, fear, and pain,
But in your arms, I find my calm again.
No need for thunder, lightning, or a storm,
Just quiet love that keeps my spirit warm.`
  },
  {
    title: "Between Two Hearts",
    content: `Between two hearts, a secret world is spun,
A tapestry that glows beneath the sun.
Words unspoken weave a bond so deep,
In shared dreams awake and silent sleep.

No need for more than just this simple space—
Where time dissolves and leaves no trace.
In the stillness, love’s pure light imparts,
The timeless dance between two hearts.

Hand in hand, we face the shifting tides,
Together strong, where endless love abides.
A silent vow that neither time nor fate
Can ever break, or cause us to separate.`
  },
{
    title: "Beneath the Same Sky",
    content: `We walk on roads both near and far apart,  
Yet stars above beat with a single heart.  
Your laughter echoes in a different land,  
Still, I can feel the warmth of your hand.  

Though oceans stretch and mountains intervene,  
The moon still lights the spaces in between.  
You breathe the dusk as I inhale the dawn,  
But hope remains as night and day are drawn.  

For though the miles may test what we believe,  
Love does not break—it only learns to grieve.  
We lift our eyes and whisper, “You and I,”  
Forever bound beneath the same vast sky.`
  },
  {
    title: "Shadows and Flame",
    content: `In the cave of sorrow, light still finds a way,  
A flicker, a spark at the edge of the gray.  
Darkness may linger, heavy and wide,  
But inside your chest, a flame will reside.  

Each scar a reminder, not of defeat,  
But battles survived and truths made complete.  
Let your fear pass like a storm in the night,  
For you were always more fire than fright.  

Shadows may chase you, but you hold the flame,  
It dances in silence, it speaks your name.  
So rise like the dawn with embers aglow,  
You are the fire the dark will soon know.`
  },
  {
    title: "When the Rain Whispers",
    content: `The rain comes soft like a lover’s breath,  
Kissing the earth in a quiet death.  
Each drop a secret, a tale unknown,  
Of joy, of grief, of being alone.  

It falls on rooftops, on streets and skin,  
Washing the pain we carry within.  
Its whisper calls to hearts grown cold,  
To stories forgotten, waiting to be told.  

In every puddle, a mirrored face,  
A glimpse of the past we tried to erase.  
But rain doesn’t judge—it only cleans,  
And leaves behind a world of dreams.`
  },
  {
    title: "The Garden Within",
    content: `Inside each soul, a garden lies,  
Beyond the reach of worldly eyes.  
Some bloom with roses, bold and bright,  
Some wait in shadow, seeking light.  

There’s soil of sorrow, roots of grace,  
A wild peace in that sacred place.  
The weeds we fight, the seeds we sow,  
They shape the love we learn to grow.  

So tend your garden, soft and slow,  
Let healing rain and sunshine flow.  
In time, the petals will unfold—  
A blooming heart, both brave and bold.`
  }
];

const likes = JSON.parse(localStorage.getItem("likes")) || Array(poems.length).fill(0);


let comments = JSON.parse(localStorage.getItem("comments"));
if (!Array.isArray(comments) || comments.length !== poems.length) {
  comments = Array(poems.length).fill().map(() => []);
  localStorage.setItem("comments", JSON.stringify(comments));
}

function renderPoems() {
  const container = document.getElementById("poems");
  container.innerHTML = "";

  poems.forEach((poem, index) => {
    const article = document.createElement("article");

    const poemLines = poem.content
      .split('\n')
      .map(line => `<p>${line.trim()}</p>`)
      .join('');

    const existingComments = (comments[index] || [])
      .map(c => `<p>${c}</p>`)
      .join('');

    article.innerHTML = `
      <h2>
        <span class="toggle" onclick="togglePoem(${index})">▶</span>
        ${poem.title}
      </h2>
      <div class="poem-content" id="poem-${index}" style="display:none;">
        ${poemLines}
        <button onclick="likePoem(${index})">Like</button>
        <span class="likes" id="likes-${index}">${likes[index]}</span>
        <div class="comment-box">
          <textarea placeholder="Leave a comment" id="comment-${index}"></textarea>
          <button onclick="addComment(${index})">Comment</button>
        </div>
        <div class="comment-section" id="comments-${index}">
          ${existingComments}
        </div>
      </div>
    `;
    container.appendChild(article);
  });
}

window.addEventListener("DOMContentLoaded", renderPoems);

function likePoem(index) {
  likes[index]++;
  document.getElementById(`likes-${index}`).innerText = likes[index];
  localStorage.setItem("likes", JSON.stringify(likes)); // Save updated likes
}

function addComment(index) {
  const textArea = document.getElementById(`comment-${index}`);
  const commentText = textArea.value.trim();
  if (commentText !== "") {
    const commentSection = document.getElementById(`comments-${index}`);
    const comment = document.createElement("p");
    comment.textContent = commentText;
    commentSection.appendChild(comment);
    textArea.value = "";

    comments[index].push(commentText); // Store in memory
    localStorage.setItem("comments", JSON.stringify(comments)); // Save to localStorage
  }
}

function togglePoem(index) {
  const content = document.getElementById(`poem-${index}`);
  const toggle = document.querySelectorAll(".toggle")[index];
  const isVisible = content.style.display === "block";
  content.style.display = isVisible ? "none" : "block";
  toggle.textContent = isVisible ? "▶" : "▼";
}
