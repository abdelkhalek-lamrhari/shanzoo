export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  highlight?: MenuItem;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "entrees-froides",
    title: "Entrées Froides",
    items: [
      { name: "Burrata tomate", description: "fromage burrata – tomates – roquette – sauce pesto", price: "140 DH" },
      { name: "Stracciatella légumes", description: "légume grillée (aubergine-courgette-tomate) – fromage stracciatella – roquette – basilic – sauce pesto – tomate cerise", price: "120 DH" },
      { name: "Salade capri", description: "tomate – mozzarella cerise – concombre – roquette – sauce pesto – crème balsamique – huile d'olive", price: "110 DH" },
      { name: "Carpaccio de bœuf", description: "carpaccio de bœuf – huile d'olive – sauce pesto – parmesan – pinea – roquette", price: "140 DH" },
      { name: "Carpaccio de bœuf à la truffe", description: "carpaccio de bœuf – pâte de truffe – huile de truffe – truffe slice – roquette – parmesan – pinea", price: "170 DH" },
      { name: "Carpaccio thon rouge", description: "carpaccio de thon – câpre – huile d'olive – jus citron – roquette – tomate cerise – avocat", price: "130 DH" },
      { name: "Salade fruit de mer", description: "mesclun – roquette – gambas – calamar – moules – palourdes – avocat – mangue – vinaigre balsamique – jus citron", price: "150 DH" },
      { name: "Salade césar", description: "laitue – poulet – croûton – sauce césar – parmesan – œuf", price: "120 DH" },
      { name: "Vitello tonato", description: "noix de veau (rôtie) tranchée – tomate cerise – tomate séchée – huile d'olive – sauce tonato – roquette – câpres – copeaux thon frais", price: "140 DH" },
      { name: "Salade Shanzoo", description: "mesclun – fromage feta – noix – figues – pomme – grenadine – tomate cerise – framboise – myrtilles – sauce à l'orange", price: "165 DH" },
      { name: "Guacamole", description: "guacamole – gambas tempura", price: "160 DH" },
      { name: "Assiette fromage", price: "200 DH" },
    ],
  },
  {
    id: "entrees-chaudes",
    title: "Entrées Chaudes",
    items: [
      { name: "Sautée à la veneziana", description: "crevette gris – asperge – tomate cerise – ail ciselé – basilic – câpres – olive noir", price: "150 DH" },
      { name: "Aubergine à la parmigiana", description: "aubergine tranchée (au four) – concassée de tomate – parmesan – mozzarella – basilic – origan", price: "90 DH" },
      { name: "Crevette pil-pil", description: "crevette – ail – piment – sel-poivre – persil", price: "130 DH" },
    ],
  },
  {
    id: "friture",
    title: "Friture",
    items: [
      { name: "Calamar frit", description: "sauce tartare", price: "130 DH" },
      { name: "Patatas bravas", description: "sauce bravas", price: "70 DH" },
      { name: "Croquettes pulpe-gambas", description: "sauce aïoli", price: "120 DH" },
    ],
  },
  {
    id: "pates",
    title: "Nos Pâtes",
    items: [
      { name: "Linguini bolognaise", description: "viande hachée – sauce tomate – parmesan", price: "120 DH" },
      { name: "Linguini stracciatella", description: "ail – tomate cerise – tomate provençale – sauce tomate – stracciatella (gratinée)", price: "120 DH" },
      { name: "Penne arrabbiata burrata", description: "penne – sauce tomate piquante – burrata", price: "160 DH" },
      { name: "Tagliatelle capri", description: "huile d'olive – ail – tomate cerise – crevette – asperge – artichaut (sauce à l'ail)", price: "160 DH" },
      { name: "Spaghetti noir de pulpe", description: "huile d'olive – ail – tomate cerise – pulpe (sauce à l'ail)", price: "160 DH" },
      { name: "Linguini à la scoglio", description: "huile d'olive – ail – tomate cerise – calamar – crevette – palourdes – moules (sauce spéciale)", price: "170 DH" },
      { name: "Linguini al vongole", description: "huile d'olive – ail – palourdes", price: "130 DH" },
      { name: "Penne manfredi", description: "épinards – saumon fumé – parmesan – sauce rose", price: "150 DH" },
      { name: "Tagliatelle poulet champignon", description: "oignon – champignon – poulet – crème cuisson – persil – parmesan", price: "140 DH" },
      { name: "Linguini poulet à la truffe", description: "oignon – poulet – champignon – pâte de truffe – huile de truffe – truffe slice – parmesan", price: "160 DH" },
      { name: "Linguini carbonara", description: "bacon halal – spaghetti – crème cuisson – parmesan – jaune d'œuf", price: "140 DH" },
      { name: "Raviolis gambas", description: "gambas tiger – raviolis ricotta – sauce tomate", price: "160 DH" },
      { name: "Ravioli saumon", description: "raviolis ricotta et épinard – saumon fumé – épinards – sauce rose", price: "160 DH" },
      { name: "Lasagne bolognaise", price: "120 DH" },
    ],
  },
  {
    id: "pizzas",
    title: "Nos Pizzas",
    items: [
      { name: "Pizza Margherita", description: "sauce tomate – mozzarella – basilic – huile d'olive – origan", price: "100 DH" },
      { name: "Pizza Régina", description: "sauce tomate – mozzarella – champignon – dinde fumée – basilic – huile d'olive – origan", price: "130 DH" },
      { name: "Pizza bolognaise", description: "sauce tomate – mozzarella – viande hachée", price: "130 DH" },
      { name: "Pizza végétarienne", description: "sauce tomate – mozzarella – champignon – aubergine – courgette – poivrons grillés – basilic – huile d'olive – sauce pesto – roquette – origan", price: "120 DH" },
      { name: "Pizza fruit de mer", description: "sauce tomate – mozzarella – calamar – crevette – palourdes – moules – basilic – huile d'olive – roquette – origan", price: "150 DH" },
      { name: "Pizza biancaneve", description: "crème cuisson – mozzarella – fromage de chèvre – fromage bleu – parmesan – stracciatella", price: "130 DH" },
      { name: "Pizza babini", description: "sauce tomate – mozzarella – pepperoni – basilic – huile d'olive – parmesan – origan", price: "140 DH" },
      { name: "Pizza bonito", description: "sauce tomate – mozzarella – thon – oignon – huile d'olive – basilic – roquette – origan", price: "110 DH" },
      { name: "Pizza andria", description: "sauce tomate – mozzarella – champignon – poulet – piquant – basilic – huile d'olive – origan – roquette", price: "130 DH" },
      { name: "Pizza burrata", description: "sauce tomate – mozzarella – basilic – huile d'olive – burrata – roquette – origan – sauce pesto", price: "140 DH" },
      { name: "Pizza alba", description: "crème cuisson – fromage burrata – pâte truffe – mozzarella – huile de truffe – truffe slice – basilic – huile d'olive – roquette – origan", price: "170 DH" },
      { name: "Calzone maria", description: "sauce tomate – champignon – mozzarella – bacon – basilic – jaune d'œuf – huile d'olive – roquette – origan", price: "130 DH" },
    ],
  },
  {
    id: "risottos",
    title: "Nos Risottos",
    items: [
      { name: "Risotto poulet champignon", description: "poulet – champignon – crème cuisson – parmesan", price: "140 DH" },
      { name: "Risotto poulet à la truffe", description: "poulet – pâte de truffe – huile de truffe – truffe slice – parmesan", price: "170 DH" },
      { name: "Risotto billuchi", description: "oignon – champignon – artichaut – asperge – stracciatella", price: "150 DH" },
      { name: "Risotto à la scoglio", description: "ail – gambas – calamar – palourdes – moules – parmesan", price: "180 DH" },
      { name: "Risotto safran au noix de saint-jacques", description: "risotto safran – beurre – parmesan – saint-jacques grillées", price: "250 DH" },
    ],
  },
  {
    id: "viandes",
    title: "Nos Viandes",
    items: [
      { name: "Filet de bœuf grillé", description: "filet de bœuf grillé – sauces champignon-poivre", price: "340 DH" },
      { name: "Escalope à la milanaise", description: "escalope de veau panée – roquette – parmesan – tranche de citron – garniture linguini sauce tomate", price: "220 DH" },
      { name: "Escalope au citron", description: "escalope grillée – arrosée au beurre – jus de citron – persil – farine (liaison) – garniture purée et légumes", price: "250 DH" },
      { name: "Entrecôte grillée", description: "entrecôte grillée – garniture purée et légumes – sauce poivre-champignon", price: "280 DH" },
    ],
  },
  {
    id: "poissons",
    title: "Nos Poissons",
    items: [
      { name: "Loup de mer", description: "filet de bar grillé – garniture risone aux fruits de mer", price: "250 DH" },
      { name: "Saint-Pierre", description: "filet de Saint-Pierre grillé – purée – légumes provençale – sauce poivron rouge", price: "280 DH" },
      { name: "Pavé de saumon", description: "saumon grillé – purée et épinards sautés – sauce laquée pâte hoi-sin – jus d'orange – miel", price: "280 DH" },
      { name: "Thon rouge", description: "pavé de thon rouge grillé – linguini pesto – sauce tomate brunoise provençale et palourdes", price: "240 DH" },
      { name: "Dorade Shanzoo", description: "filet de dorade grillée – purée de pomme douce et légumes bébé – sauce roquefort", price: "260 DH" },
      { name: "Espadon", description: "filet grillé – garniture pommes nouvelles tandoori", price: "260 DH" },
    ],
    highlight: {
      name: "Spécial pour deux personnes — Paella aux fruits de mer",
      price: "350 DH",
    },
  },
  {
    id: "desserts",
    title: "Nos Desserts",
    items: [
      { name: "Moelleux au chocolat", description: "moelleux au chocolat – glace vanille – crème anglaise", price: "140 DH" },
      { name: "Crème brûlée", description: "crème brûlée – boule de glace", price: "120 DH" },
      { name: "Tiramisu café", description: "boule de glace – espresso", price: "100 DH" },
      { name: "San Sebastian cake", description: "sauce chocolat ou pistache", price: "100 DH" },
      { name: "Pavlova fruit rouge", description: "meringue – ganache chocolat blanc – glace fraise-citron – confit de fruit rouge", price: "120 DH" },
      { name: "Paris Brest", description: "pâte à choux – ganache noisette – noisettes torréfiées – sauce chocolat", price: "140 DH" },
      { name: "Trésor de coco", description: "coco – mousse coco – confit de mangue – biscuit coco – quenelle ganache", price: "130 DH" },
      { name: "Tarte citron revisitée", description: "confit exotique – mousse citron – biscuit dacquoise – meringue – gel mojito", price: "" },
      { name: "Assiette de fruits", description: "fruits de saison", price: "150 DH" },
    ],
  },
  {
    id: "mocktails",
    title: "Mocktails",
    items: [
      { name: "San Francisco", price: "100 Dh" },
      { name: "Virgin Colada", price: "100 Dh" },
      { name: "Virgin Mojito", price: "100 Dh" },
      { name: "Dragon Love", price: "100 Dh" },
      { name: "Star Martini", price: "100 Dh" },
      { name: "Fleur D'Amour", price: "100 Dh" },
      { name: "Cosmo Gingembre", price: "100 Dh" },
      { name: "Mocktil De Chef", price: "120 Dh" },
      { name: "Sangria Sans Alcool", price: "280 Dh" },
    ],
  },
  {
    id: "eaux",
    title: "Eaux",
    items: [
      { name: "San Pellegrino 75/50", price: "50/100 Dh" },
      { name: "Acqua Panna 75/50", price: "50/100 Dh" },
      { name: "Sidi Ali 50cl/75cl", price: "35/50 Dh" },
      { name: "Oulmès 25/75", price: "25/50 Dh" },
    ],
  },
  {
    id: "boissons-chaudes",
    title: "Boissons Chaudes",
    items: [{ name: "Café Nespresso", price: "35 Dh" }],
  },
  {
    id: "boissons-fraiches",
    title: "Boissons Fraîches",
    items: [
      { name: "San Miguel Sans Alcool", price: "70 Dh" },
      { name: "Redbull", price: "100 Dh" },
      { name: "Soda", price: "50 Dh" },
      { name: "Ice Tea", price: "80 Dh" },
    ],
  },
];
