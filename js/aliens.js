const aliens = [

  {id: 1001, name: "HEATBLAST", display: "Heatblast", portrait: "Portraits/HEATBLAST.png", availability: [1, 1, 1, 1, 0, 1, 0],body1:"MINERAL",body2:"FIRE",body3:"NONE",ele1:"FIRE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[55,50,80,60]},

  {id: 1002, name: "WILDMUTT", display: "Wildmutt", portrait: "Portraits/WILDMUTT.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[50,40,0,35]},

  {id: 1003, name: "DIAMONDHEAD", display: "Diamondhead", portrait: "Portraits/DIAMONDHEAD.png", availability: [1, 0, 0, 1, 0, 1, 0],body1:"MINERAL",body2:"NONE",body3:"NONE",ele1:"MINERAL",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[70,70,30,50]},

  {id: 1004, name: "XLR8", display: "XLR8", portrait: "Portraits/XLR8.png", availability: [1, 0, 1, 1, 0, 1, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[40,40,35,80]},

  {id: 1005, name: "GREY MATTER", display: "Grey Matter", portrait: "Portraits/GREY MATTER.png", availability: [1, 0, 1, 1, 0, 1, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[10,1,0,10]},

  {id: 1006, name: "FOUR ARMS", display: "Four Arms", portrait: "Portraits/FOUR ARMS.png", availability: [1, 0, 1, 1, 0, 1, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[60,50,30,60]},

  {id: 1007, name: "STINKFLY", display: "Stinkfly", portrait: "Portraits/STINKFLY.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"GAS",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[40,50,0,50]},

  {id: 1008, name: "RIPJAWS", display: "Ripjaws", portrait: "Portraits/RIPJAWS.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[40,50,0,20]},

  {id: 1009, name: "UPGRADE", display: "Upgrade", portrait: "Portraits/UPGRADE.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"MECHANICAL",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[50,50,55,20]},

  {id: 1010, name: "GHOSTFREAK (CLOAKED)", display: "Ghostfreak (Cloaked)", portrait: "Portraits/GHOSTFREAK.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,35,0,40]},

  {id: 1011, name: "CANNONBOLT", display: "Cannonbolt", portrait: "Portraits/CANNONBOLT.png", availability: [1, 1, 1, 1, 0, 1, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[90,40,40,60]},

  {id: 1012, name: "WILDVINE", display: "Wildvine", portrait: "Portraits/WILDVINE.png", availability: [1, 0, 1, 1, 0, 1, 0],body1:"BOTANICAL",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[50,50,40,20]},

  {id: 1013, name: "BLITZWOLFER", display: "Blitzwolfer", portrait:"Portraits/BLITZWOLFER.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"SOUND",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[40,30,50,35]},

  {id: 1014, name: "SNARE-OH", display: "Snare-Oh", portrait: "Portraits/SNARE-OH.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"FABRIC",body2:"MECHANICAL",body3:"NONE",ele1:"NONE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[50,30,0,20]},

  {id: 1015, name: "UPCHUCK (PERK)", display: "Upchuck (Perk)", portrait: "Portraits/UPCHUCK.png", availability: [1, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"POISON",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[30,10,20,20]},

  {id: 1016, name: "FRANKENSTRIKE", display: "Frankenstrike", portrait: "Portraits/FRANKENSTRIKE.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"ELECTRIC",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[80,40,50,15]},

  {id: 1017, name: "GHOSTFREAK (TRUE FORM)", display: "Ghostfreak (True form)", portrait: "Portraits/GHOSTFREAK_COMPLETE.png", availability: [1, 1, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,50,55,40]},

  {id: 1018, name: "DITTO", display: "Ditto", portrait: "Portraits/DITTO.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[20,20,0,20]},

  {id: 1019, name: "EYE GUY", display: "Eye Guy", portrait: "Portraits/EYE GUY.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"ELECTRIC", ele3:"ICE",ele4:"FIRE",stats:[40,25,50,30]},

  {id: 1020, name: "WAY BIG", display: "Way Big", portrait: "Portraits/WAY BIG.png", availability: [1, 1, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"ENERGY",ele2:"WIND", ele3:"NONE",ele4:"NONE",stats:[100,80,90,90]},

  {id: 1021, name: "ARCTIGUANA", display: "Arctiguana", portrait: "Portraits/ARCTIGUANA.png", availability: [1, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"ICE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[40,30,0,50]},

  {id: 1022, name: "FEEDBACK", display: "Feedback", portrait: "Portraits/FEEDBACK.png", availability: [1, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"ELECTRIC",body3:"NONE",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[40,30,40,50]},

  {id: 1023, name: "SWAMPFIRE", display: "Swampfire", portrait: "Portraits/SWAMPFIRE.png", availability: [0, 1, 1, 0, 0, 0, 0],body1:"BOTANICAL",body2:"NONE",body3:"NONE",ele1:"FIRE",ele2:"GAS", ele3:"NONE",ele4:"NONE",stats:[45,30,40,50]},

  {id: 1024, name: "ECHO ECHO", display: "Echo Echo", portrait: "Portraits/ECHO ECHO.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"MECHANICAL",body2:"NONE",body3:"NONE",ele1:"SOUND",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[30,20,80,20]},

  {id: 1025, name: "HUMUNGOUSAUR", display: "Humungousaur", portrait: "Portraits/HUMUNGOUSAUR.png", availability: [0, 1, 1, 1, 0, 1, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[70,40,30,35]},

  {id: 1026, name: "HUMUNGOUSAUR (FULL SIZE)", display: "Humungousaur (Full Size)", portrait: "Portraits/HUMUNGOUSAUR_FULL_SIZE.png", availability: [0, 1, 1, 1, 0, 1, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[80,70,40,40]},

  {id: 1027, name: "JETRAY", display: "Jetray", portrait: "Portraits/JETRAY.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[45,20,40,100]},

  {id: 1028, name: "BIG CHILL", display: "Big Chill", portrait: "Portraits/BIG CHILL.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"ICE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,40,0,40]},

  {id: 1029, name: "BRAINSTORM", display: "Brainstorm", portrait: "Portraits/BRAINSTORM.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"ELECTRIC",body3:"NONE",ele1:"ELECTRIC",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,10,40,30]},

  {id: 1030, name: "CHROMASTONE", display: "Chromastone", portrait: "Portraits/CHROMASTONE.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"MINERAL",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[60,30,40,50]},

  {id: 1031, name: "SPIDERMONKEY", display: "Spidermonkey", portrait: "Portraits/SPIDERMONKEY.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[35,30,0,50]},

  {id: 1032, name: "GOOP", display: "Goop", portrait: "Portraits/GOOP.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"POISON",body2:"MECHANICAL",body3:"NONE",ele1:"POISON",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[80,30,50,60]},

  {id: 1033, name: "ALIEN X", display: "Alien X", portrait: "Portraits/ALIEN X.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"COSMIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[999,0,0,0]},

  {id: 1034, name: "UPCHUCK (MURK)", display: "Upchuck (Murk)", portrait: "Portraits/UPCHUCK_MURK.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"POISON",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[30,10,20,20]},

  {id: 1035, name: "LODESTAR", display: "Lodestar", portrait: "Portraits/LODESTAR.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"MECHANICAL",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[50,30,0,30]},

  {id: 1036, name: "NANOMECH", display: "Nanomech", portrait: "Portraits/NANOMECH.png", availability: [0, 1, 1, 1, 0, 0, 0],body1:"MECHANICAL",body2:"ORGANIC",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[10,1,15,15]},

  {id: 1037, name: "RATH", display: "Rath", portrait: "Portraits/RATH.png", availability: [0, 1, 1, 1, 0, 1, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[80,50,30,40]},

  {id: 1038, name: "DIAMONDHEAD (CHROMATIZED)", display: "Diamondhead (Chromatized)", portrait: "Portraits/DIAMONDHEAD_CHROMATIZED.png", availability: [0, 1, 1, 0, 0, 0, 0],body1:"MINERAL",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"MINERAL",ele3:"NONE",ele4:"NONE",stats:[70,70,70,50]},

  {id: 1039, name: "CHROMASTONE (PETROPIA'S GUARDIAN)", display: "Chromastone (Petropia Guardian)", portrait: "Portraits/SUGILITE.png", availability: [0, 0, 0, 0, 0, 0, 0],body1:"MINERAL",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[60,30,100,90]},

  {id: 1040, name: "WATERHAZARD", display: "Waterhazard", portrait: "Portraits/WATERHAZARD.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WATER",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[65,35,30,50]},

  {id: 1041, name: "AMPFIBIAN", display: "Ampfibian", portrait: "Portraits/AMPFIBIAN.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"ELECTRIC",body3:"NONE",ele1:"ELECTRIC",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,70,40,50]},

  {id: 1042, name: "ARMODRILLO", display: "Armodrillo", portrait: "Portraits/ARMODRILLO.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"MECHANICAL",body2:"ORGANIC",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[70,80,0,50]},

  {id: 1043, name: "TERASPIN", display: "Teraspin", portrait: "Portraits/Teraspin.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[70,40,40,40]},

  {id: 1044, name: "NRG", display: "NRG", portrait: "Portraits/NRG.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"RADIOACTIVE",body2:"MECHANICAL",body3:"NONE",ele1:"RADIOACTIVE",ele2:"FIRE",ele3:"NONE",ele4:"NONE",stats:[110,40,70,10]},

  {id: 1045, name: "NRG (TRUE FORM)", display: "NRG (True Form)", portrait: "Portraits/NRG_NO_SUIT.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"RADIOACTIVE",body2:"NONE",body3:"NONE",ele1:"RADIOACTIVE",ele2:"FIRE",ele3:"NONE",ele4:"NONE",stats:[50,20,70,60]},

  {id: 1046, name: "FASTTRACK", display: "Fasttrack", portrait: "Portraits/FASTTRACK.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[30,30,0,70]},

  {id: 1047, name: "BUZZSHOCK", display: "Buzzshock", portrait: "Portraits/BUZZSHOCK.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ELECTRIC",body2:"MECHANICAL",body3:"NONE",ele1:"ELECTRIC",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[20,10,25,30]},

  {id: 1048, name: "SPITTER", display: "Spitter", portrait: "Portraits/SPITTER.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,0,35,10]},

  {id: 1049, name: "CLOCKWORK", display: "Clockwork", portrait: "Portraits/CLOCKWORK.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"MECHANICAL",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,30,0,10]},

  {id: 1050, name: "SHOCKSQUATCH", display: "Shocksquatch", portrait: "Portraits/SHOCKSQUATCH.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"ELECTRIC",body3:"MECHANICAL",ele1:"ELECTRIC",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[50,40,70,40]},

  {id: 1051, name: "EATLE", display: "Eatle", portrait: "Portraits/EATLE.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"MECHANICAL",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[80,50,70,25]},

  {id: 1052, name: "JURYRIGG", display: "Juryrigg", portrait: "Portraits/JURYRIGG.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[20,10,0,30]},

  {id: 1053, name: "CHAMALIEN", display: "Chamalien", portrait: "Portraits/CHAMALIEN.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,25,0,20]},

  {id: 1054, name: "GRAVATTACK", display: "Gravattack", portrait: "Portraits/GRAVATTACK.png", availability: [0, 0, 1, 1, 0, 0, 0],body1:"MINERAL",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[90,40,0,60]},

  {id: 1055, name: "(ULTIMATE) HUMUNGOUSAUR", display: "(Ultimate) Humungousaur", portrait: "Portraits/ULTIMATE_HUMUNGOUSAUR.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"WIND",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[80,55,60,35]},

  {id: 1056, name: "(ULTIMATE) SWAMPFIRE", display: "(Ultimate) Swampfire", portrait: "Portraits/ULTIMATE_SWAMPFIRE.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"BOTANICAL",body2:"NONE",body3:"NONE",ele1:"FIRE",ele2:"GAS",ele3:"NONE",ele4:"NONE",stats:[65,30,60,50]},

  {id: 1057, name: "(ULTIMATE) SPIDERMONKEY", display: "(Ultimate) Spidermonkey", portrait: "Portraits/ULTIMATE_SPIDERMONKEY.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[60,50,0,30]},

  {id: 1058, name: "(ULTIMATE) BIG CHILL", display: "(Ultimate) Big Chill", portrait: "Portraits/ULTIMATE_BIG CHILL.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"ICE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,40,40,40]},

  {id: 1059, name: "(ULTIMATE) CANNONBOLT", display: "(Ultimate) Cannonbolt", portrait: "Portraits/ULTIMATE_CANNONBOLT.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"MECHANICAL",body2:"ORGANIC",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[100,50,0,50]},

  {id: 1060, name: "(ULTIMATE) ECHO ECHO", display: "(Ultimate) Echo Echo", portrait: "Portraits/ULTIMATE_ECHO ECHO.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"MECHANICAL",body2:"NONE",body3:"NONE",ele1:"SOUND",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[50,30,90,60]},

  {id: 1061, name: "(ULTIMATE) WILDMUTT", display: "(Ultimate) Wildmutt", portrait: "Portraits/ULTIMATE_WILDMUTT.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[60,45,0,35]},

  {id: 1062, name: "(ULTIMATE) WAY BIG", display: "(Ultimate) Way Big", portrait: "Portraits/ULTIMATE_WAY BIG.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"ENERGY",ele2:"WIND",ele3:"NONE",ele4:"NONE",stats:[110,85,100,95]},

  {id: 1063, name: "(ULTIMATE) GREY MATTER", display: "(Ultimate) Grey Matter", portrait: "Portraits/Ultimate_GREY MATTER.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[30,5,60,30]},

  {id: 1064, name: "(ULTIMATE) ARCTIGUANA", display: "(Ultimate) Arctiguana", portrait: "Portraits/ULTIMATE_ARCTIGUANA.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"ICE",body3:"NONE",ele1:"ICE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[50,30,40,50]},

  {id: 1065, name: "(ULTIMATE) GRAVATTACK", display: "(Ultimate) Gravattack", portrait: "Portraits/ULTIMATE_GRAVATTACK.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"MINERAL",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[90,40,0,60]},

  {id: 1066, name: "(ULTIMATE) RATH", display: "(Ultimate) Rath", portrait: "Portraits/ULTIMATE_RATH.png", availability: [0, 0, 1, 0, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[80,55,30,40]},

  {id: 1067, name: "GHOSTFREAK (CHAINED)", display: "Ghostfreak (Chained)", portrait: "Portraits/GHOSTFREAK_CHAINED.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,50,0,40]},

  {id: 1068, name: "BLOXX", display: "Bloxx", portrait: "Portraits/BLOXX.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"MINERAL",body2:"NONE",body3:"NONE",ele1:"MINERAL",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[60,30,30,50]},

  {id: 1069, name: "CRASHHOPPER", display: "Crashhopper", portrait: "Portraits/CRASHHOPPER.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,45,0,50]},

  {id: 1070, name: "BALL WEEVIL", display: "Ball Weevil", portrait: "Portraits/BALL WEEVIL.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[15,1,20,20]},

  {id: 1071, name: "WALKATROUT", display: "Walkatrout", portrait: "Portraits/WALKATROUT.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[20,5,0,10]},

  {id: 1072, name: "PESKY DUST", display: "Pesky Dust", portrait: "Portraits/PESKY DUST.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"GAS",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[20,5,0,40]},

  {id: 1073, name: "MOLE-STACHE", display: "Mole-Stache", portrait: "Portraits/MOLE_STACHE.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[30,35,0,40]},

  {id: 1074, name: "THE WORST", display: "The Worst", portrait: "Portraits/THE WORST.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[110,0,0,10]},

  {id: 1075, name: "KICKIN HAWK", display: "Kickin Hawk", portrait: "Portraits/KICKIN HAWK.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,35,0,55]},

  {id: 1076, name: "TOEPICK", display: "Toepick", portrait: "Portraits/TOEPICK.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,20,0,20]},

  {id: 1077, name: "ASTRODACTYL", display: "Astrodactyl", portrait: "Portraits/ASTRODACTYL.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[50,40,65,60]},

  {id: 1078, name: "BULLFRAG", display: "Bullfrag", portrait: "Portraits/BULLFRAG.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,25,0,30]},

  {id: 1079, name: "ATOMIX", display: "Atomix", portrait: "Portraits/ATOMIX.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"MECHANICAL",body2:"RADIOACTIVE",body3:"NONE",ele1:"RADIOACTIVE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[70,70,80,60]},

  {id: 1080, name: "GUTROT", display: "Gutrot", portrait: "Portraits/GUTROT.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"MECHANICAL",body2:"GAS",body3:"NONE",ele1:"GAS",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[60,30,0,25]},

  {id: 1081, name: "SWAMPFIRE (BLOSSOMED)", display: "Swampfire (Blossomed)", portrait: "Portraits/SWAMPFIRE_BLOSSOMED.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"BOTANICAL",body2:"NONE",body3:"NONE",ele1:"FIRE",ele2:"GAS",ele3:"NONE",ele4:"NONE",stats:[65,30,40,50]},

  {id: 1082, name: "WHAMPIRE", display: "Whampire", portrait: "Portraits/WHAMPIRE.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[55,30,0,50]},

  {id: 1083, name: "WHAMPIRE (BAT FORM)", display: "Whampire (Bat Form)", portrait: "Portraits/WHAMPIRE_BAT FORM.png", availability: [0, 0, 0, 1, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[10,1,0,40]},

  {id: 1084, name: "ATOMIC-X (FUSION)", display: "Atomic-X (Fusion)", portrait: "Portraits/ATOMIC_X.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"MECHANICAL",body2:"COSMIC",body3:"RADIOACTIVE",ele1:"RADIOACTIVE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[85,85,90,110]},

  {id: 1085, name: "BIG CHUCK (FUSION)", display: "Big Chuck (Fusion)", portrait: "Portraits/BIG CHUCK.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"ENERGY",ele2:"POISON",ele3:"WIND",ele4:"NONE",stats:[60,45,55,70]},

  {id: 1086, name: "CRASHOCKER (FUSION)", display: "Crashocker (Fusion)", portrait: "Portraits/CRASHOCKER.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"ORGANIC",body2:"ELECTRIC",body3:"MECHANICAL",ele1:"ELECTRIC",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[50,40,35,50]},

  {id: 1087, name: "FOURMUNGOUSAUR (FUSION)", display: "Fourmungousaur (Fusion)", portrait: "Portraits/FOURMUNGOUSAUR.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[65,45,30,50]},

  {id: 1088, name: "HUMUNGOOPSAUR (FUSION)", display: "Humungoopsaur (Fusion)", portrait: "Portraits/HUMUNGOOPSAUR.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"POISON",body2:"MECHANICAL",body3:"NONE",ele1:"POISON",ele2:"WIND",ele3:"NONE",ele4:"NONE",stats:[75,35,40,50]},

  {id: 1089, name: "UPRIGG (FUSION)", display: "Uprigg (Fusion)", portrait: "Portraits/Uprigg.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"MECHANICAL",body2:"NONE",body3:"NONE",ele1:"ENERGY",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[35,35,30,25]},

  {id: 1090, name: "STINK ARMS (FUSION)", display: "Stink Arms (Fusion)", portrait: "Portraits/STINK ARMS.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"GAS",ele3:"NONE",ele4:"NONE",stats:[50,50,15,55]},

  {id: 1091, name: "DIAMOND MATTER (FUSION)", display: "Diamond matter (Fusion)", portrait: "Portraits/DIAMOND MATTER.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"MINERAL",body2:"NONE",body3:"NONE",ele1:"MINERAL",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[40,40,15,30]},

  {id: 1092, name: "HEATJAWS (FUSION)", display: "Heatjaws (Fusion)", portrait: "Portraits/Heatjaws.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"ORGANIC",body2:"MINERAL",body3:"FIRE",ele1:"FIRE",ele2:"NONE",ele3:"NONE",ele4:"NONE",stats:[50,50,40,40]},

  {id: 1093, name: "OVERFLOW", display: "Overflow", portrait: "Portraits/OVERFLOW.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"WATER",body2:"MECHANICAL",body3:"NONE",ele1:"WATER",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[45,50,35,55]},

  {id: 1094, name: "STINKFLY (REBOOT)", display: "Stinkfly (Reboot)", portrait: "Portraits/STINKFLY REBOOT.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"GAS",ele2:"WIND", ele3:"NONE",ele4:"NONE",stats:[40,35,30,50]},

  {id: 1095, name: "GREY ARMS (FUSION)", display: "Grey Arms (Fusion)", portrait: "Portraits/GREY ARMS.png", availability: [0, 0, 0, 0, 1, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"WIND",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[35,25,15,35]},

  {id: 1096, name: "GAX", display: "Gax", portrait: "Portraits/GAX.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"ORGANIC",body2:"MECHANICAL",body3:"NONE",ele1:"ENERGY",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[90,60,30,50]},
  
  {id: 1097, name: "SHOCK ROCK", display: "Shock Rock", portrait: "Portraits/SHOCKROCK.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"ELECTRIC",body2:"MINERAL",body3:"NONE",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[70,80,60,20]},

  {id: 1098, name: "(OMNI-ENHANCED) DIAMONDHEAD", display: "(Omni-Enhanced) Diamondhead", portrait: "Portraits/DIAMONDHEAD ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"MINERAL",body2:"ELECTRIC",body3:"NONE",ele1:"MINERAL",ele2:"ELECTRIC", ele3:"NONE",ele4:"NONE",stats:[70,70,50,50]},

  {id: 1099, name: "(OMNI-ENHANCED) GREY MATTER", display: "(Omni-Enhanced) Grey Matter", portrait: "Portraits/GREY MATTER ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"MINERAL",body2:"ELECTRIC",body3:"ORGANIC",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[40,40,20,20]},

  {id: 1100, name: "(OMNI-ENHANCED) WILDVINE", display: "(Omni-Enhanced) Wildvine", portrait: "Portraits/WILDVINE ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"MINERAL",body2:"ELECTRIC",body3:"BOTANICAL",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[60,55,40,20]},

  {id: 1101, name: "(OMNI-ENHANCED) HEATBLAST", display: "(Omni-Enhanced) Heatblast", portrait: "Portraits/HEATBLAST ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"MINERAL",body2:"FIRE",body3:"ELECTRIC",ele1:"FIRE",ele2:"ELECTRIC", ele3:"NONE",ele4:"NONE",stats:[55,50,80,80]},

  {id: 1102, name: "(OMNI-ENHANCED) FOUR ARMS", display: "(Omni-Enhanced) Four Arms", portrait: "Portraits/FOUR ARMS ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"ORGANIC",body2:"MINERAL",body3:"ELECTRIC",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[65,70,30,40]},

  {id: 1103, name: "(OMNI-ENHANCED) CANNONBOLT", display: "(Omni-Enhanced) Cannonbolt", portrait: "Portraits/CANNONBOLT ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"ORGANIC",body2:"MINERAL",body3:"ELECTRIC",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[80,50,30,60]},

  {id: 1104, name: "(OMNI-ENHANCED) STINKFLY (REBOOT)", display: "(Omni-Enhanced) Stinkfly", portrait: "Portraits/STINKFLY REBOOT ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"ORGANIC",body2:"MINERAL",body3:"ELECTRIC",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[50,35,30,60]},

  {id: 1105, name: "(OMNI-ENHANCED) OVERFLOW", display: "(Omni-Enhanced) Overflow", portrait: "Portraits/OVERFLOW ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"WATER",body2:"ELECTRIC",body3:"MECHANICAL",body4:"MINERAL",ele1:"WATER",ele2:"ELECTRIC", ele3:"ICE",ele4:"WIND",stats:[55,50,60,60]},

  {id: 1106, name: "(OMNI-ENHANCED) XLR8", display: "(Omni-Enhanced) XLR8", portrait: "Portraits/XLR8 ENHANCED.png", availability: [0, 0, 0, 0, 0, 1, 0],body1:"MINERAL",body2:"ELECTRIC",body3:"ORGANIC",ele1:"ELECTRIC",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[55,50,20,90]}




];

//{id: 1067, name: "GHOSTFREAK", display: "Ghostfreak ", portrait: "Portraits/GHOSTFREA.png", availability: [0, 0, 0, 0, 0, 0, 0],body1:"ORGANIC",body2:"NONE",body3:"NONE",ele1:"NONE",ele2:"NONE", ele3:"NONE",ele4:"NONE",stats:[40,50,55,40]},