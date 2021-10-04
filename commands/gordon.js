const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gordon')
    .setDescription('Replies with either a recipe or insult from Gordan Ramsay')
    .addSubcommand(subcommand =>
        subcommand
            .setName('insult')
            .setDescription('Hatta replies with an insult'))
    .addSubcommand(subcommand =>
        subcommand
            .setName('recipe')
            .setDescription('Hatta replies with a recipe')),
        
    async execute(interaction) {

        if (interaction.options.getSubcommand() === 'insult') {
            await interaction.reply (randomItem("insults"))

        } else if (interaction.options.getSubcommand() == 'recipe') {

            await interaction.reply (randomItem("recipes"));

        }
    },
};

const recipes = ["https://www.gordonramsay.com/gr/recipes/pork-stuffed-with-manchego-and-membrillo/",
"https://www.gordonramsay.com/gr/recipes/roast-beef-with-caramelised-onion-gravy/",
"https://www.gordonramsay.com/gr/recipes/bakedchickenwings/",
"https://www.gordonramsay.com/gr/recipes/stuffed-lamb-with-spinach-and-pine-nuts/",
"https://www.gordonramsay.com/gr/recipes/candiedchickpeasnackmix/",
"https://www.gordonramsay.com/gr/recipes/frenchlentilswithlabneh/",
"https://www.gordonramsay.com/gr/recipes/harissatoast/",
"https://www.gordonramsay.com/gr/recipes/barleyrisotto/",
"https://www.gordonramsay.com/gr/recipes/buttermilkbiscuit/",
"https://www.gordonramsay.com/gr/recipes/mojochickenquinoabowl/",
"https://www.gordonramsay.com/gr/recipes/gingerbreadbundtcake/",
"https://www.gordonramsay.com/gr/recipes/holidaystuffing/",
"https://www.gordonramsay.com/gr/recipes/stickytoffee-pudding/",
"***You are not worthy!***"
];

const insults = ["I’ve never, ever, ever met someone I believe in as little as you!",
"This fish is so raw it's still trying to find Nemo!",
"There’s enough garlic in here to kill every vampire in Europe!",
"Why did the chicken cross the road? Cause thats how it escaped out of this restaurant, thats how fucking raw this is!",
"You cook like old people fuck!",
"This crab is so undercooked I can still hear it singing 'Under the Sea'!",
"You're a first class cunt",
"This lamb is so underdone a skilled vetrinarian could still save it!",
"I wouldn’t trust you running a bath, let alone a fucking restaurant!",
"You're a fucking disgrace...",
"This has so much oil in it America wants to invade the fucking plate!",
"You wanna see my asshole? You can watch me walk out of the door of this fucking dump!",
"Chimichanga? More like chimi-chuck-it-in-the-bin!",
"You fucking donut!",
"It's not as if you're the captain of the Titanic... You're the fucking iceberg!",
"This beef is so frozen it is singing 'Let It Go'!",
"You put so much ginger in this it’s a Weasley!",
"You fucking donkey",
"Fuck off you piece of fucking yankie dankie doodle shite, fuck off will you please yeah?",
"Right, well I’ll get you your pumpkin, and I’ll ram it up your fucking ass, would you like it whole or diced?",
"Don’t whistle at me I’m not your fucking dog, you look like more of a dog than I do!",
"This bread pudding tastes like I already threw it up out of my arse!",
"Is your brains in your fucking arse? Is your brains in your fucking arse?",
"That looks like it had a thousand buffaloes walk over it!",
"You stuck up precious little bitch...",
"My Gran could do it better, and she’s dead!",
"THIS SQUID IS SO RAW I CAN STILL HEAR IT TELLING SPONGEBOB TO FUCK OFF!",
"Your breaded cod tastes more like a breaded condom!",
"For what we are about to eat, may the Lord make us truly not vomit",
"This pasta is more limp than my grandfather’s dick!"
];

const lenInsults = insults.length;
const lenRecipes = recipes.length;

function randomItem(list) {

    if (list == "insults") {

        let index = Math.floor(Math.random() * (lenInsults));
        return insults[index];

    } else if (list == "recipes") {

        let index = Math.floor(Math.random() * (lenRecipes));
        return recipes[index];

    };

};