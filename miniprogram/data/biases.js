const biases = [
  {
    "title": "Fundamental Attribution Error",
    "desc": "We judge others on their personality or fundamental character, but we judge ourselves on the situation.",
    "ext": "Sally is late to class; she's lazy. You're late to class; it was a bad morning.",
    "labels": ["Belief", "Social"],
    "illustration": "biases/fundamental-attribution-error.jpg",
  },
  {
    "title": "Self-Serving Bias",
    "desc": "Our failures are situational, but our successes are our responsibility.",
    "ext": "You won that award due to hard work rather than help or luck. Meanwhile, you failed a test because you hadn't gotten enough sleep.",
    "labels": ["Money", "Belief", "Social"],
    "illustration": "biases/self-serving-bias.jpg",
  },
  {
    "title": "In-Group Favoritism",
    "desc": "We favor people who are in our in-group as opposed to an out-group",
    "ext": "Francis is in your church, so you like Francis more than Sally",
    "labels": ["Social", "Belief", "Politics"],
    "illustration": "biases/in-group-favoritism.jpg",
  },
  {
    "title": "Bandwagon Effect",
    "desc": "Ideas, fads, and beliefs grow as more people adopt them.",
    "ext": "Sally believes fidget spinners help her children. Francis does, too.",
    "labels": ["Social", "Belief", "Politics"],
    "illustration": "biases/bandwagon-effect.jpg",
  },
  {
    "title": "Groupthink",
    "desc": "Due to a desire for conformity and harmony in the group, we make irrational decisions, often to minimize conflict.",
    "ext": "Sally wants to go get ice cream. Francis wants to shop for T-shirts. You suggest getting T-shirts with pictures of ice cream on them.",
    "labels": ["Social", "Belief", "Politics"],
    "illustration": "biases/groupthink.jpg",
  },
  {
    "title": "Halo Effect",
    "desc": "If you see a person as having a positive trait, that positive trait impression will spill over into their other traits. (This also works for negative traits.)",
    "ext": "\"Taylor could never be mean, she's so cute!\"",
    "labels": ["Social", "Belief", "Politics"],
    "illustration": "biases/halo-effect.jpg",
  },
  {
    "title": "Moral Luck",
    "desc": "Better moral standing happens due to a positive outcome; worse moral standing happens due to a negative outcome.",
    "ext": "\"X culture won X war because they were morally superior to the losers.\"",
    "labels": ["Social", "Belief", "Politics", "Memory"],
    "illustration": "biases/moral-luck.jpg",
  },
  {
    "title": "False Consensus",
    "desc": "We believe more people agree with us than is actually the case.",
    "ext": "\"Everybody thinks that!\"",
    "labels": ["Social", "Belief", "Politics"],
    "illustration": "biases/false-consensus.jpg",
  },
  {
    "title": "Curse of Knowledge",
    "desc": "Once we know something, we assume everyone else knows it, too.",
    "ext": "Alice is a teacher and struggles to understand the perspective of her new students.",
    "labels": ["Social", "Belief", "Politics", "Memory"],
    "illustration": "biases/curse-of-knowledge.jpg",
  },
  {
    "title": "Spotligh Effect",
    "desc": "We overestimate how much people are paying attention to our behavior and appearance.",
    "ext": "Sally is worried everyone's going to notice how lame her ice cream T-shirt is.",
    "labels": ["Social", "Memory"],
    "illustration": "biases/spotlight-effect.jpg",
  },
  {
    "title": "Availability Heuristic",
    "desc": "We rely on immediate examples that come to mind while making judgments.",
    "ext": "When trying to decide on which store to visit, you choose the one you most recently saw an ad for.",
    "labels": ["Belief", "Learning", "Memory", "Politics", "Money"],
    "illustration": "biases/availability-heuristic.jpg",
  },
  {
    "title": "Defensive Attribution",
    "desc": "As a witness who secretly fears being vulnerable to a serious mishap, we will blame the victim less and attacker more if we relate to the victim",
    "ext": " Sally sat too long at a green light because she was playing with her phone. She got rear-ended. Greg, who is known to text and drive, got out and yelled at the person who smacked into her.",
    "labels": ["Social", "Memory", "Politics"],
    "illustration": "biases/defensive-attribution.jpg",
  },
  {
    "title": "Just-World Hypothesis",
    "desc": "We tend to believe the world is just; therefore, we assume acts of injustice are deserved.",
    "ext": "\"Sally's purse was stolen because she was mean to Francis about their T-shirt and had bad karma.\"",
    "labels": ["Social", "Memory", "Politics", "Belief"],
    "illustration": "biases/just-world-hypothesis.jpg",
  },
  {
    "title": "Naive Realism",
    "desc": " We believe that we observe objective reality and that other people are irrational, uninformed, or biased.",
    "ext": "\"see the world as it really is — other people are dumb.\"",
    "labels": ["Social", "Memory", "Politics", "Belief"],
    "illustration": "biases/naive-realism.jpg",
  },
  {
    "title": "Naive Cynicism",
    "desc": "We believe that we observe objective reality and that other people have a higher egocentric bias than they actually do in their intentions/actions.",
    "ext": "\"The only reason this person is doing something nice is to get something out of me.\"",
    "labels": ["Social", "Memory", "Politics", "Belief"],
    "illustration": "biases/naive-cynicism.jpg",
  },
  {
    "title": "Forer Effect",
    "alias": "Barnum Effect",
    "desc": "We easily attribute our personalities to vague statements, even if they can apply to a wide range of people",
    "ext": "\"This horoscope is so accurate!\"",
    "labels": ["Memory", "Belief"],
    "illustration": "biases/forer-effect.jpg",
  },
  {
    "title": "Dunning-Kruger Effect",
    "desc": "The less you know, the more confident you are. The more you know, the less confident you are.",
    "ext": "Francis confidently assures the group that there's no kelp in ice cream. They do not work in the dairy industry.",
    "labels": ["Social", "Belief", "Learning", "Memory", "Politics", "Money"],
    "illustration": "biases/dunning-kruger-effect.jpg",
  },
  {
    "title": "Anchoring",
    "desc": "We rely heavily on the first piece of information introduced when making decisions",
    "ext": "“That's 50% off? It must be a great deal.”",
    "labels": ["Learning", "Belief", "Memory", "Money"],
    "illustration": "biases/anchoring.jpg",
  },
  {
    "title": "Automation Bias",
    "desc": "We rely on automated systems, sometimes trusting too much in the automated correction of actually correct decisions",
    "ext": "Your phone auto-corrects \"its\" to \"it's,\" so you assume it's right.",
    "labels": ["Learning", "Memory", "Belief"],
    "illustration": "biases/automation-bias.jpg",
  },
  {
    "title": " Google Effect",
    "alias": "Digital Amnesia",
    "desc": " We tend to forget information that’s easily looked up in search engines.",
    "ext": "\"What was the name of that actor in that funny movie? I've looked it up like eight times... .\"",
    "labels": ["Learning", "Memory", "Belief"],
    "illustration": "biases/google-effect.jpg",
  },
  {
    "title": "Reactance",
    "desc": "We do the opposite of what we're told, especially when we perceive threats to personal freedoms.",
    "ext": "One of Alice's students refuses to do his homework, even though both she and his parents tell him to.",
    "labels": ["Social", "Money", "Politics"],
    "illustration": "biases/reactance.jpg",
  },
  {
    "title": "Confirmation Bias",
    "desc": "We tend to find and remember information that confirms our perceptions.",
    "ext": "You can confirm a conspiracy theory based on scant evidence while ignoring contrary evidence.",
    "labels": ["Learning", "Memory", "Belief", "Politics"],
    "illustration": "biases/confirmation-bias.jpg",
  },
  {
    "title": "Backfire Effect",
    "desc": "Disproving evidence sometimes has the unwarranted effect of confirming our beliefs.",
    "ext": "The evidence that disproves your conspiracy theory was probably faked by the government.",
    "labels": ["Belief", "Learning", "Memory", "Politics"],
    "illustration": "biases/backfire-effect.jpg",
  },
  {
    "title": "Third-Person Effect",
    "desc": "We believe that others are more affected by mass media consumption than we ourselves are.",
    "ext": "\"You've clearly been brainwashed by the media!\"",
    "labels": ["Memory", "Social", "Learning", "Belief", "Politics"],
    "illustration": "biases/third-person-effect.jpg",
  },
  {
    "title": "Belief Bias",
    "desc": "We judge an argument's strength not by how strongly it supports the conclusion but how plausible the conclusion is in our own minds.",
    "ext": "Sally mentions her supporting theory about your conspiracy theory, which you adopt wholeheartedly despite the fact that she has very litle evidence for it.",
    "labels": ["Belief", "Learning", "Memory", "Politics"],
    "illustration": "biases/belief-bias.jpg",
  },
  {
    "title": "Availability Cascade",
    "desc": "Tied to our need for social acceptance, collective beliefs gain more plausibility through public repetition.",
    "ext": " A story about razor blades appearing in candy eventually led to many people no longer offering homemade treats on Halloween in America.",
    "labels": ["Memory", "Social", "Learning", "Belief", "Money", "Politics"],
    "illustration": "biases/availability-cascade.jpg",
  },
  {
    "title": "Declinism",
    "desc": " We tend to romanticize the past and view the future negatively, believing that societies/institutions are by and large in decline",
    "ext": "\"In my day, kids had more respect!\"",
    "labels": ["Memory", "Social", "Belief", "Politics"],
    "illustration": "biases/declinism.jpg",
  },
  {
    "title": "Status Quo Bias",
    "desc": "We tend to prefer things to stay the same; changes from the baseline are considered to be a loss.",
    "ext": "Even though an app's terms of service invade Sally's privacy, she'd rather not switch to another app.",
    "labels": ["Memory", "Social", "Learning", "Belief", "Money", "Politics"],
    "illustration": "biases/status-quo-bias.jpg",
  },
  {
    "title": " Sunk Cost Fallacy",
    "alias": "Escalation of Commitment",
    "desc": "We invest more in things that have cost us something rather than altering our investments, even if we face negative outcomes.",
    "ext": "\"In for a penny, in for a pound!\"",
    "labels": ["Memory", "Belief", "Money"],
    "illustration": "biases/sunk-cost-fallacy.jpg",
  },
  {
    "title": "Gambler's Fallacy",
    "desc": "We think future possibilities are affected by past events.",
    "ext": "Alice has lost nine coin tosses in a row, so she's sure to win the next one!",
    "labels": ["Memory", "Belief", "Money"],
    "illustration": "biases/gambler-fallacy.jpg",
  },
  {
    "title": "Zero-Risk Bias",
    "desc": "We prefer to reduce small risks to zero, even if we can reduce more risk overall with another option.",
    "ext": "\"You should probably buy the warranty.\"",
    "labels": ["Belief", "Money", "Politics"],
    "illustration": "biases/zero-risk-bias.jpg",
  },
  {
    "title": "Framing Effect",
    "desc": "We often draw different conclusions from the same information depending on how it's presented.",
    "ext": "Alice hears that her favorite candidate is \"killing it\" with a 45% approval rating. Sally hears that the candidate is \"disappointing the country\" with a 45% rating. They have wildly different interpretations of the same statistic.",
    "labels": ["Learning", "Social", "Belief", "Money", "Politics"],
    "illustration": "biases/framing-effect.jpg",
  },
  {
    "title": "Stereotyping",
    "desc": "We adopt generalized beliefs that members of a group will have certain characteristics, despite not having information about the individual.",
    "ext": "\"That guy with the fancy mustache is a hipster. He probably has a vinyl collection.\"",
    "labels": ["Memory", "Social", "Learning", "Belief", "Politics"],
    "illustration": "biases/stereotyping.jpg",
  },
  {
    "title": "Outgroup Homogeneity Bias",
    "desc": "We perceive out-group members as homogeneous and our own in-groups as more diverse.",
    "ext": "Alice is not a gamer, but she believes \"all gamers are the same.\"",
    "labels": ["Memory", "Social", "Learning", "Belief", "Money", "Politics"],
    "illustration": "biases/outgroup-homogeneity-bias.jpg",
  },
  {
    "title": "Authority Bias",
    "desc": "We trust and are more often influenced by the opinions of authority figures.",
    "ext": "\"My teacher told me this was fine.\"",
    "labels": ["Social", "Belief", "Money", "Politics"],
    "illustration": "biases/authority-bias.jpg",
  },
  {
    "title": "Placebo Effect",
    "desc": "If we believe a treatment will work, it often will have a small physiological effect.",
    "ext": "Alice was given a placebo for her pain, and her pain decreased.",
    "labels": ["Memory", "Belief", "Money"],
    "illustration": "biases/placebo-effect.jpg",
  },
  {
    "title": "Survivorship Bias",
    "desc": "We tend to focus on those things that survived a process and overlook ones that failed",
    "ext": "Greg tells Alice her purse business is going to be great because a successful fashion company had the same strategy. (But 10 other failed companies also had the same strategy.)",
    "labels": ["Social", "Belief", "Money", "Politics"],
    "illustration": "biases/survivorship-bias.jpg",
  },
  {
    "title": "Tachypsychia",
    "desc": "Our perceptions of time shift depending on trauma, drug use, and physical exertion.",
    "ext": "\"When the car almost hit me, time slowed down ... .\"",
    "labels": ["Memory", "Learning", "Belief"],
    "illustration": "biases/tachypsychia.jpg",
  },
  {
    "title": "Law of Triviality",
    "alias": "Bike-Shedding",
    "desc": "We give disproportionate weight to trivial issues, often while avoiding more complex issues",
    "ext": "Rather than figuring out how to help the homeless, a local city government spends a lot of time discussing putting in a bike path and bike sheds.",
    "labels": ["Memory", "Social", "Money", "Politics"],
    "illustration": "biases/law-of-triviality.jpg",
  },
  {
    "title": "Zeigarnik Effect",
    "desc": "We remember incomplete tasks more than completed ones.",
    "ext": "Greg feels guilty for never getting anything done, until he sees all of the tasks he's checked off on his task list.",
    "labels": ["Memory", "Belief"],
    "illustration": "biases/zeigarnik-effect.jpg",
  },
  {
    "title": "IKEA Effect",
    "desc": "We place higher value on things we partially created ourselves.",
    "ext": "\"Don't you love this pot I spent $20 on? I painted it myself!\"",
    "labels": ["Social", "Belief", "Money"],
    "illustration": "biases/ikea-effect.jpg",
  },
  {
    "title": "Ben Franklin Effect",
    "desc": "We like doing favors; we are more likely to do another favor for someone if we've already done a favor for them than if we had received a favor from that person.",
    "ext": "Greg loaned Francis a pen. When Francis asked to borrow $5, Greg did it readily.",
    "labels": ["Social", "Belief", "Money", "Politics"],
    "illustration": "biases/ben-franklin-effect.jpg",
  },
  {
    "title": "Bystander Effect",
    "desc": "The more other people are around, the less likely we are to help a victim.",
    "ext": "In a crowd of students, no one called 911 when someone got hurt in a fight.",
    "labels": ["Social", "Money"],
    "illustration": "biases/bystander-effect.jpg",
  },
  {
    "title": "Suggestibility",
    "desc": "We, especially children, sometimes mistake ideas suggested by a questioner for memories.",
    "ext": "\"So did you fall off the couch before or after your mom hit you?\"",
    "labels": ["Memory", "Social", "Learning", "Belief"],
    "illustration": "biases/suggestibility.jpg",
  },
  {
    "title": "False Memory",
    "desc": "We mistake imagination for real memories.",
    "ext": "Greg is certain Sally said a really funny joke about pineapples, when that joke actually came from a TV show.",
    "labels": ["Memory", "Social", "Belief"],
    "illustration": "biases/false-memory.jpg",
  },
  {
    "title": "Cryptomnesia",
    "desc": "We mistake real memories for imagination.",
    "ext": "Greg thinks he visited a graveyard, but he's pretty sure he just had a spooky dream.",
    "labels": ["Memory", "Social", "Belief"],
    "illustration": "biases/cryptomnesia.jpg",
  },
  {
    "title": "Clustering Illusion",
    "desc": "We find patterns and \"clusters\" in random data.",
    "ext": "\"That cloud looks like your cat, Alice!\"",
    "labels": ["Memory", "Belief"],
    "illustration": "biases/clustering-illusion.jpg",
  },
  {
    "title": "Pressimism Bias",
    "desc": "We sometimes overestimate the likelihood of bad outcomes.",
    "ext": "\"Nothing will ever get better.\"",
    "labels": ["Memory", "Belief"],
    "illustration": "biases/pressimism-bias.jpg",
  },
  {
    "title": "Optimism Bias",
    "desc": "We sometimes are over-optimisitc about good outcomes.",
    "ext": "\"It's going to turn out great!\"",
    "labels": ["Memory", "Belief"],
    "illustration": "biases/optimism-bias.jpg",
  },
  {
    "title": "Blind Spot Bias",
    "desc": "We don't think we have bias, and we see it in others more than ourselves.",
    "ext": "\"I am not biased!\"",
    "labels": ["Memory", "Social", "Learning", "Belief"],
    "illustration": "biases/blind-spot-bias.jpg",
  },
];

module.exports = biases
