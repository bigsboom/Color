
var data=[
  { name: 'LightPink', chinese: '浅粉红', hex: '#FFB6C1', decimal: '(255,182,193)' },
  { name: 'Pink', chinese: '粉红', hex: '#FFC0CB', decimal: '(255,192,203)' },
  { name: 'Crimson', chinese: '深红(猩红)', hex: '#DC143C', decimal: '(220,20,60)' },
  { name: 'LavenderBlush', chinese: '淡紫红', hex: '#FFF0F5', decimal: '(255,240,245)' },
  { name: 'PaleVioletRed', chinese: '弱紫罗兰红', hex: '#DB7093', decimal: '(219,112,147)' },
  { name: 'HotPink', chinese: '热情的粉红', hex: '#FF69B4', decimal: '(255,105,180)' },
  { name: 'DeepPink', chinese: '深粉红', hex: '#FF1493', decimal: '(255,20,147)' },
  { name: 'MediumVioletRed', chinese: '中紫罗兰红', hex: '#C71585', decimal: '(199,21,133)' },
  { name: 'Orchid', chinese: '暗紫色(兰花紫)', hex: '#DA70D6', decimal: '(218,112,214)' },
  { name: 'Thistle', chinese: '蓟色', hex: '#D8BFD8', decimal: '(216,191,216)' },
  { name: 'Plum', chinese: '洋李色(李子紫)', hex: '#DDA0DD', decimal: '(221,160,221)' },
  { name: 'Violet', chinese: '紫罗兰', hex: '#EE82EE', decimal: '(238,130,238)' },
  { name: 'Magenta', chinese: '洋红(玫瑰红)', hex: '#FF00FF', decimal: '(255,0,255)' },
  { name: 'Fuchsia', chinese: '紫红(灯笼海棠)', hex: '#FF00FF', decimal: '(255,0,255)' },
  { name: 'DarkMagenta', chinese: '深洋红', hex: '#8B008B', decimal: '(139,0,139)' },
  { name: 'Purple', chinese: '紫色', hex: '#800080', decimal: '(128,0,128)' },
  { name: 'MediumOrchid', chinese: '中兰花紫', hex: '#BA55D3', decimal: '(186,85,211)' },
  { name: 'DarkViolet', chinese: '暗紫罗兰', hex: '#9400D3', decimal: '(148,0,211)' },
  { name: 'DarkOrchid', chinese: '暗兰花紫', hex: '#9932CC', decimal: '(153,50,204)' },
  { name: 'Indigo', chinese: '靛青/紫兰色', hex: '#4B0082', decimal: '(75,0,130)' },
  { name: 'BlueViolet', chinese: '蓝紫罗兰', hex: '#8A2BE2', decimal: '(138,43,226)' },
  { name: 'MediumPurple', chinese: '中紫色', hex: '#9370DB', decimal: '(147,112,219)' },
  { name: 'MediumSlateBlue', chinese: '中暗蓝色(中板岩蓝)', hex: '#7B68EE', decimal: '(123,104,238)' },
  { name: 'SlateBlue', chinese: '石蓝色(板岩蓝)', hex: '#6A5ACD', decimal: '(106,90,205)' },
  { name: 'DarkSlateBlue', chinese: '暗灰蓝色(暗板岩蓝)', hex: '#483D8B', decimal: '(72,61,139)' },
  { name: 'Lavender', chinese: '淡紫色(熏衣草淡紫)', hex: '#E6E6FA', decimal: '(230,230,250)' },
  { name: 'GhostWhite', chinese: '幽灵白', hex: '#F8F8FF', decimal: '(248,248,255)' },
  { name: 'Blue', chinese: '纯蓝', hex: '#0000FF', decimal: '(0,0,255)' },
  { name: 'MediumBlue', chinese: '中蓝色', hex: '#0000CD', decimal: '(0,0,205)' },
  { name: 'MidnightBlue', chinese: '午夜蓝', hex: '#191970', decimal: '(25,25,112)' },
  { name: 'DarkBlue', chinese: '暗蓝色', hex: '#00008B', decimal: '(0,0,139)' },
  { name: 'Navy', chinese: '海军蓝', hex: '#000080', decimal: '(0,0,128)' },
  { name: 'RoyalBlue', chinese: '皇家蓝/宝蓝', hex: '#4169E1', decimal: '(65,105,225)' },
  { name: 'CornflowerBlue', chinese: '矢车菊蓝', hex: '#6495ED', decimal: '(100,149,237)' },
  { name: 'LightSteelBlue', chinese: '亮钢蓝', hex: '#B0C4DE', decimal: '(176,196,222)' },
  { name: 'LightSlateGray', chinese: '亮蓝灰(亮石板灰)', hex: '#778899', decimal: '(119,136,153)' },
  { name: 'SlateGray', chinese: '灰石色(石板灰)', hex: '#708090', decimal: '(112,128,144)' },
  { name: 'DodgerBlue', chinese: '闪兰色(道奇蓝)', hex: '#1E90FF', decimal: '(30,144,255)' },
  { name: 'AliceBlue', chinese: '爱丽丝蓝', hex: '#F0F8FF', decimal: '(240,248,255)' },
  { name: 'SteelBlue', chinese: '钢蓝/铁青', hex: '#4682B4', decimal: '(70,130,180)' },
  { name: 'LightSkyBlue', chinese: '亮天蓝色', hex: '#87CEFA', decimal: '(135,206,250)' },
  { name: 'SkyBlue', chinese: '天蓝色', hex: '#87CEEB', decimal: '(135,206,235)' },
  { name: 'DeepSkyBlue', chinese: '深天蓝', hex: '#00BFFF', decimal: '(0,191,255)' },
  { name: 'LightBlue', chinese: '亮蓝', hex: '#ADD8E6', decimal: '(173,216,230)' },
  { name: 'PowderBlue', chinese: '粉蓝色(火药青)', hex: '#B0E0E6', decimal: '(176,224,230)' },
  { name: 'CadetBlue', chinese: '军兰色(军服蓝)', hex: '#5F9EA0', decimal: '(95,158,160)' },
  { name: 'Azure', chinese: '蔚蓝色', hex: '#F0FFFF', decimal: '(240,255,255)' },
  { name: 'LightCyan', chinese: '淡青色', hex: '#E0FFFF', decimal: '(224,255,255)' },
  { name: 'PaleTurquoise', chinese: '弱绿宝石', hex: '#AFEEEE', decimal: '(175,238,238)' },
  { name: 'Cyan', chinese: '青色', hex: '#00FFFF', decimal: '(0,255,255)' },
  { name: 'Aqua', chinese: '浅绿色(水色)', hex: '#00FFFF', decimal: '(0,255,255)' },
  { name: 'DarkTurquoise', chinese: '暗绿宝石', hex: '#00CED1', decimal: '(0,206,209)' },
  { name: 'DarkSlateGray', chinese: '暗瓦灰色(暗石板灰)', hex: '#2F4F4F', decimal: '(47,79,79)' },
  { name: 'DarkCyan', chinese: '暗青色', hex: '#008B8B', decimal: '(0,139,139)' },
  { name: 'Teal', chinese: '水鸭色', hex: '#008080', decimal: '(0,128,128)' },
  { name: 'MediumTurquoise', chinese: '中绿宝石', hex: '#48D1CC', decimal: '(72,209,204)' },
  { name: 'LightSeaGreen', chinese: '浅海洋绿', hex: '#20B2AA', decimal: '(32,178,170)' },
  { name: 'Turquoise', chinese: '绿宝石', hex: '#40E0D0', decimal: '(64,224,208)' },
  { name: 'Aquamarine', chinese: '宝石碧绿', hex: '#7FFFD4', decimal: '(127,255,212)' },
  { name: 'MediumAquamarine', chinese: '中宝石碧绿', hex: '#66CDAA', decimal: '(102,205,170)' },
  { name: 'MediumSpringGreen', chinese: '中春绿色', hex: '#00FA9A', decimal: '(0,250,154)' },
  { name: 'MintCream', chinese: '薄荷奶油', hex: '#F5FFFA', decimal: '(245,255,250)' },
  { name: 'SpringGreen', chinese: '春绿色', hex: '#00FF7F', decimal: '(0,255,127)' },
  { name: 'MediumSeaGreen', chinese: '中海洋绿', hex: '#3CB371', decimal: '(60,179,113)' },
  { name: 'SeaGreen', chinese: '海洋绿', hex: '#2E8B57', decimal: '(46,139,87)' },
  { name: 'Honeydew', chinese: '蜜色(蜜瓜色)', hex: '#F0FFF0', decimal: '(240,255,240)' },
  { name: 'LightGreen', chinese: '淡绿色', hex: '#90EE90', decimal: '(144,238,144)' },
  { name: 'PaleGreen', chinese: '弱绿色', hex: '#98FB98', decimal: '(152,251,152)' },
  { name: 'DarkSeaGreen', chinese: '暗海洋绿', hex: '#8FBC8F', decimal: '(143,188,143)' },
  { name: 'LimeGreen', chinese: '闪光深绿', hex: '#32CD32', decimal: '(50,205,50)' },
  { name: 'Lime', chinese: '闪光绿', hex: '#00FF00', decimal: '(0,255,0)' },
  { name: 'ForestGreen', chinese: '森林绿', hex: '#228B22', decimal: '(34,139,34)' },
  { name: 'Green', chinese: '纯绿', hex: '#008000', decimal: '(0,128,0)' },
  { name: 'DarkGreen', chinese: '暗绿色', hex: '#006400', decimal: '(0,100,0)' },
  { name: 'Chartreuse', chinese: '黄绿色(查特酒绿)', hex: '#7FFF00', decimal: '(127,255,0)' },
  { name: 'LawnGreen', chinese: '草绿色(草坪绿)', hex: '#7CFC00', decimal: '(124,252,0)' },
  { name: 'GreenYellow', chinese: '绿黄色', hex: '#ADFF2F', decimal: '(173,255,47)' },
  { name: 'DarkOliveGreen', chinese: '暗橄榄绿', hex: '#556B2F', decimal: '(85,107,47)' },
  { name: 'YellowGreen', chinese: '黄绿色', hex: '#9ACD32', decimal: '(154,205,50)' },
  { name: 'OliveDrab', chinese: '橄榄褐色', hex: '#6B8E23', decimal: '(107,142,35)' },
  { name: 'Beige', chinese: '米色/灰棕色', hex: '#F5F5DC', decimal: '(245,245,220)' },
  { name: 'LightGoldenrodYellow', chinese: '亮菊黄', hex: '#FAFAD2', decimal: '(250,250,210)' },
  { name: 'Ivory', chinese: '象牙色', hex: '#FFFFF0', decimal: '(255,255,240)' },
  { name: 'LightYellow', chinese: '浅黄色', hex: '#FFFFE0', decimal: '(255,255,224)' },
  { name: 'Yellow', chinese: '纯黄', hex: '#FFFF00', decimal: '(255,255,0)' },
  { name: 'Olive', chinese: '橄榄', hex: '#808000', decimal: '(128,128,0)' },
  { name: 'DarkKhaki', chinese: '暗黄褐色(深卡叽布)', hex: '#BDB76B', decimal: '(189,183,107)' },
  { name: 'LemonChiffon', chinese: '柠檬绸', hex: '#FFFACD', decimal: '(255,250,205)' },
  { name: 'PaleGoldenrod', chinese: '灰菊黄(苍麒麟色)', hex: '#EEE8AA', decimal: '(238,232,170)' },
  { name: 'Khaki', chinese: '黄褐色(卡叽布)', hex: '#F0E68C', decimal: '(240,230,140)' },
  { name: 'Gold', chinese: '金色', hex: '#FFD700', decimal: '(255,215,0)' },
  { name: 'Cornsilk', chinese: '玉米丝色', hex: '#FFF8DC', decimal: '(255,248,220)' },
  { name: 'Goldenrod', chinese: '金菊黄', hex: '#DAA520', decimal: '(218,165,32)' },
  { name: 'DarkGoldenrod', chinese: '暗金菊黄', hex: '#B8860B', decimal: '(184,134,11)' },
  { name: 'FloralWhite', chinese: '花的白色', hex: '#FFFAF0', decimal: '(255,250,240)' },
  { name: 'OldLace', chinese: '老花色(旧蕾丝)', hex: '#FDF5E6', decimal: '(253,245,230)' },
  { name: 'Wheat', chinese: '浅黄色(小麦色)', hex: '#F5DEB3', decimal: '(245,222,179)' },
  { name: 'Moccasin', chinese: '鹿皮色(鹿皮靴)', hex: '#FFE4B5', decimal: '(255,228,181)' },
  { name: 'Orange', chinese: '橙色', hex: '#FFA500', decimal: '(255,165,0)' },
  { name: 'PapayaWhip', chinese: '番木色(番木瓜)', hex: '#FFEFD5', decimal: '(255,239,213)' },
  { name: 'BlanchedAlmond', chinese: '白杏色', hex: '#FFEBCD', decimal: '(255,235,205)' },
  { name: 'NavajoWhite', chinese: '纳瓦白(土著白)', hex: '#FFDEAD', decimal: '(255,222,173)' },
  { name: 'AntiqueWhite', chinese: '古董白', hex: '#FAEBD7', decimal: '(250,235,215)' },
  { name: 'Tan', chinese: '茶色', hex: '#D2B48C', decimal: '(210,180,140)' },
  { name: 'BurlyWood', chinese: '硬木色', hex: '#DEB887', decimal: '(222,184,135)' },
  { name: 'Bisque', chinese: '陶坯黄', hex: '#FFE4C4', decimal: '(255,228,196)' },
  { name: 'DarkOrange', chinese: '深橙色', hex: '#FF8C00', decimal: '(255,140,0)' },
  { name: 'Linen', chinese: '亚麻布', hex: '#FAF0E6', decimal: '(250,240,230)' },
  { name: 'Peru', chinese: '秘鲁色', hex: '#CD853F', decimal: '(205,133,63)' },
  { name: 'PeachPuff', chinese: '桃肉色', hex: '#FFDAB9', decimal: '(255,218,185)' },
  { name: 'SandyBrown', chinese: '沙棕色', hex: '#F4A460', decimal: '(244,164,96)' },
  { name: 'Chocolate', chinese: '巧克力色', hex: '#D2691E', decimal: '(210,105,30)' },
  { name: 'SaddleBrown', chinese: '重褐色(马鞍棕色)', hex: '#8B4513', decimal: '(139,69,19)' },
  { name: 'Seashell', chinese: '海贝壳', hex: '#FFF5EE', decimal: '(255,245,238)' },
  { name: 'Sienna', chinese: '黄土赭色', hex: '#A0522D', decimal: '(160,82,45)' },
  { name: 'LightSalmon', chinese: '浅鲑鱼肉色', hex: '#FFA07A', decimal: '(255,160,122)' },
  { name: 'Coral', chinese: '珊瑚', hex: '#FF7F50', decimal: '(255,127,80)' },
  { name: 'OrangeRed', chinese: '橙红色', hex: '#FF4500', decimal: '(255,69,0)' },
  { name: 'DarkSalmon', chinese: '深鲜肉/鲑鱼色', hex: '#E9967A', decimal: '(233,150,122)' },
  { name: 'Tomato', chinese: '番茄红', hex: '#FF6347', decimal: '(255,99,71)' },
  { name: 'MistyRose', chinese: '浅玫瑰色(薄雾玫瑰)', hex: '#FFE4E1', decimal: '(255,228,225)' },
  { name: 'Salmon', chinese: '鲜肉/鲑鱼色', hex: '#FA8072', decimal: '(250,128,114)' },
  { name: 'Snow', chinese: '雪白色', hex: '#FFFAFA', decimal: '(255,250,250)' },
  { name: 'LightCoral', chinese: '淡珊瑚色', hex: '#F08080', decimal: '(240,128,128)' },
  { name: 'RosyBrown', chinese: '玫瑰棕色', hex: '#BC8F8F', decimal: '(188,143,143)' },
  { name: 'IndianRed', chinese: '印度红', hex: '#CD5C5C', decimal: '(205,92,92)' },
  { name: 'Red', chinese: '纯红', hex: '#FF0000', decimal: '(255,0,0)' },
  { name: 'Brown', chinese: '棕色', hex: '#A52A2A', decimal: '(165,42,42)' },
  { name: 'FireBrick', chinese: '火砖色(耐火砖)', hex: '#B22222', decimal: '(178,34,34)' },
  { name: 'DarkRed', chinese: '深红色', hex: '#8B0000', decimal: '(139,0,0)' },
  { name: 'Maroon', chinese: '栗色', hex: '#800000', decimal: '(128,0,0)' },
  { name: 'White', chinese: '纯白', hex: '#FFFFFF', decimal: '(255,255,255)' },
  { name: 'WhiteSmoke', chinese: '白烟', hex: '#F5F5F5', decimal: '(245,245,245)' },
  { name: 'Gainsboro', chinese: '淡灰色(庚斯博罗灰)', hex: '#DCDCDC', decimal: '(220,220,220)' },
  { name: 'LightGrey', chinese: '浅灰色', hex: '#D3D3D3', decimal: '(211,211,211)' },
  { name: 'Silver', chinese: '银灰色', hex: '#C0C0C0', decimal: '(192,192,192)' },
  { name: 'DarkGray', chinese: '深灰色', hex: '#A9A9A9', decimal: '(169,169,169)' },
  { name: 'Gray', chinese: '灰色', hex: '#808080', decimal: '(128,128,128)' },
  { name: 'DimGray', chinese: '暗淡的灰色', hex: '#696969', decimal: '(105,105,105)' },
]


// 定义数据出口
module.exports = {
  postList: data
}