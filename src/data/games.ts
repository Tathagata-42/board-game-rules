export const games = [
    {
      id: "poker",
      name: "Poker",
      category: "Card Game",
      image: "/images/poker.jpg",
      shortDescription: "A strategic card game of betting, bluffing, and skill.",
      rules: [
        "Overview: Poker is a popular card game that combines strategy, skill, and luck. The objective is to form the best five-card hand or bluff other players into folding.",
        "Setup: 2–10 players, a standard 52-card deck, and chips for betting.",
        "Blinds: The two players left of the dealer post small blind and big blind bets to start the pot.",
        "Hole Cards: Each player is dealt 2 private cards face down.",
        "Flop: Three community cards are dealt face-up, followed by a betting round.",
        "Turn: A fourth community card is dealt, followed by another betting round.",
        "River: A fifth community card is dealt, leading to the final betting round.",
        "Showdown: Remaining players reveal cards, and the best 5-card hand wins.",
        "Winning Hands (Highest to Lowest): Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, High Card."
      ],
      tips: [
        "Fold more hands than you play; patience is key.",
        "Pay attention to betting patterns—opponents reveal a lot by how they bet.",
        "Bluff occasionally, but avoid being predictable.",
        "Focus on position—players acting later have more information."
      ]
    },
    {
      id: "sequence",
      name: "Sequence",
      category: "Board & Card Game",
      image: "/images/sequence.jpg",
      shortDescription: "A board and card game where players form sequences of 5 chips.",
      rules: [
        "Overview: Sequence combines strategy and luck, where players aim to form rows, columns, or diagonals of 5 chips on the board.",
        "Setup: 2–12 players (individuals or teams), 2 decks of cards, and colored chips.",
        "Board: Displays all cards (except Jacks) twice in a 10x10 grid. Corner spaces are wild and count for all players.",
        "Turn: A player selects a card from their hand and places a chip on the matching card on the board.",
        "Wild Cards: Two-eyed Jacks act as wild cards (place a chip anywhere), while one-eyed Jacks can remove an opponent’s chip.",
        "Card Draw: After placing a chip, the player draws a new card from the pile.",
        "Winning Condition: The first player/team to complete 2 sequences of 5 connected chips wins."
      ],
      tips: [
        "Use one-eyed Jacks strategically to block your opponent.",
        "Focus on building multiple potential sequences at once.",
        "Keep an eye on opponents’ moves and block them when possible."
      ]
    },
    {
      id: "uno",
      name: "Uno",
      category: "Card Game",
      image: "/images/uno.jpg",
      shortDescription: "A fast-paced card game of colors and numbers with action cards.",
      rules: [
        "Overview: Uno is a fun and competitive card game where players match colors or numbers to get rid of all their cards.",
        "Setup: 2–10 players. Each player is dealt 7 cards from the Uno deck, and the rest form the draw pile.",
        "Gameplay: Players take turns matching the top card of the discard pile by number or color.",
        "Action Cards: Skip, Reverse, Draw Two, Wild, and Wild Draw Four change the game's flow.",
        "Calling Uno: When a player has one card left, they must call 'Uno'. Failure results in drawing two extra cards.",
        "Winning: The first player to play all their cards wins the round. Points are scored based on cards left in opponents' hands."
      ],
      tips: [
        "Save Wild cards for critical moments when you cannot match the color or number.",
        "Keep track of what colors opponents are collecting and avoid helping them.",
        "Use Reverse and Skip cards strategically to stop strong players."
      ]
    },
    {
      id: "rummy",
      name: "Rummy",
      category: "Card Game",
      image: "/images/rummy.jpg",
      shortDescription: "A classic card game focused on creating sets and runs.",
      rules: [
        "Overview: Rummy is a matching card game where the goal is to form valid sets and sequences.",
        "Setup: 2–6 players using 1 or 2 standard decks of 52 cards (with jokers). Each player is dealt 10 cards.",
        "Turn: Players draw one card from the stock or discard pile and then discard a card.",
        "Melding: Players form sets (three or four of the same rank) or runs (three or more consecutive cards of the same suit).",
        "Jokers: Jokers can be used as wild cards to complete sets or runs.",
        "Winning: A player wins by discarding their last card after forming valid sets/runs and declaring.",
        "Scoring: Opponents’ ungrouped cards are scored as penalty points."
      ],
      tips: [
        "Focus on completing pure sequences early to avoid penalties.",
        "Keep track of the cards opponents are picking and discarding.",
        "Use jokers wisely to complete crucial runs or sets."
      ]
    },
    {
      id: "scrabble",
      name: "Scrabble",
      category: "Board Game",
      image: "/images/scrabble.jpg",
      shortDescription: "A board game where players form words for points using letter tiles.",
      rules: [
        "Overview: Scrabble is a word game where players place letter tiles on a board to form valid words.",
        "Setup: Each player draws 7 tiles from the bag to form their initial rack.",
        "Gameplay: On your turn, create a word by placing tiles on the board, connecting to existing words.",
        "Scoring: Each letter has a point value. Bonus squares like Double Letter or Triple Word increase scores.",
        "Tile Exchange: Players can skip a turn to exchange any or all of their tiles.",
        "Winning: The game ends when all tiles are played, and the player with the highest total score wins."
      ],
      tips: [
        "Try to use bonus squares like Triple Word for maximum points.",
        "Save high-value letters like Q and Z for premium positions.",
        "Look for opportunities to form multiple words in one move."
      ]
    },
    {
      id: "monopoly",
      name: "Monopoly",
      category: "Board Game",
      image: "/images/monopoly.jpg",
      shortDescription: "A strategy board game of buying, trading, and managing properties.",
      rules: [
        "Overview: Monopoly is played by moving around the board, buying properties, and collecting rent.",
        "Setup: Each player starts with a token, money, and the board setup includes Chance and Community Chest cards.",
        "Turns: Players roll two dice, move their token, and take actions such as buying properties or paying rent.",
        "Building: Players can build houses and hotels to increase rent on owned properties.",
        "Bankruptcy: A player who cannot pay rent or debt is declared bankrupt and removed from the game.",
        "Winning: The game ends when all but one player are bankrupt. The remaining player wins."
      ],
      tips: [
        "Focus on completing a color set early to build houses and hotels.",
        "Railroads and utilities can provide steady income—don’t ignore them.",
        "Keep some cash handy to avoid bankruptcy during unexpected rent payments."
      ]
    },
    {
      id: "carrom",
      name: "Carrom",
      category: "Board Game",
      image: "/images/carrom.jpg",
      shortDescription: "A classic indoor board game played with a striker and carrom men.",
      rules: [
        "Overview: Carrom is a strike-and-pocket game played on a square wooden board. The aim is to pocket all your carrom men before your opponent.",
        "Setup: The board is set with 9 white and 9 black carrom men arranged around a red queen at the center.",
        "Turn: Players use the striker to hit carrom men into the corner pockets. A shot is taken by flicking the striker.",
        "Queen Rule: To claim the queen, you must pocket a carrom man of your color immediately after pocketing the queen.",
        "Scoring: Each carrom man is worth 1 point. The queen is worth 5 points if properly covered.",
        "Winning: A player wins by reaching the agreed score (e.g., 25 points) or by pocketing all their carrom men first."
      ],
      tips: [
        "Always aim for the queen early, but be ready to cover it immediately.",
        "Practice aiming at different angles to improve precision shots.",
        "Use lighter flicks for nearby pieces and stronger flicks for edge shots."
      ]
    },
    {
      id: "trash",
      name: "Trash (Garbage)",
      category: "Card Game",
      image: "/images/trash.jpg",
      shortDescription: "A fast-paced card game where players aim to complete a 10-card sequence first.",
      rules: [
        "Overview: Trash is a simple yet exciting card game where players try to fill all 10 positions (Ace through 10) in order before their opponent.",
        "Players: 2–4 players, using a standard 52-card deck. For 3+ players, use 2 decks shuffled together.",
        "Setup: Each player gets 10 face-down cards arranged in a row, and the rest form the draw pile.",
        "Gameplay: Players take turns drawing a card. If it’s an Ace through 10, they place it in its correct position (Ace = 1st slot, 2 = 2nd slot, etc.).",
        "Replacements: When you place a card, you flip over the card in that slot and continue replacing until you can’t place anymore.",
        "Wild Cards: Kings are wild and can fill any empty slot. Queens and Jacks are 'trash' cards and end your turn.",
        "Winning the Round: The first player to correctly place all 10 cards wins the round. In the next round, they play with 9 cards, while others still have 10.",
        "Winning the Game: The first player to complete all rounds (down to 1 card) wins."
      ],
      tips: [
        "Use Kings carefully as wild cards to fill missing slots.",
        "Pay attention to your opponent’s discarded cards to plan your moves.",
        "Memorize flipped cards to avoid wasting turns."
      ]
    }
  ];