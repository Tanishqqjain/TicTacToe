var root = document.body
        
var FirstScreen = {
    view : function() {
        return m("main.sans-serif","Hello")
    }
}
var InstructionScreen = {
    view : function() {
        return m("main.sans-serif.h-100",
        [
            m("div.dib.flex.flex-column.items-center.bg-washed-yellow.h-100-ns",[
                
                m("h3.f3-l.shadow-3.bg-dark-gray.washed-yellow.pa3.mv0.tc.w-100",{style:{"font-family":"'Permanent Marker', cursive"}},"RULES FOR TIC-TAC-TOE"),
                m("ul.ba.br2.tc.w-90.bg-dark-gray.washed-yellow.shadow-3.pa3",
                [
                    m("li.pa2.grow.f3-ns","The game is played on a grid that's 3 squares by 3 squares."),
                    m("li.pa2.grow.f3-ns","You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares."),
                    m("li.pa2.grow.f3-ns","The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner."),
                    m("li.pa2.grow.f3-ns","When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie."),
                    m("li.pa2.grow.f3-ns","The player, who won a match, will play first chance in next match."),
                    m("li.pa2.grow.f3-ns.pb0","*******")
                ]),
                m("a.no-underline.f4.pv2.ph4.br3.ba.bg-gray.white.ma2.grow",{href: "#!/GameScreen"},"Let's Play!"),
                m("img.w-30-ns.w-75",{src:"./image/tic.png"},)
            ])

        ])
    }
}
var GameScreen = {
    view : function() {
        return m("body.h-100",
        [
            m("main.h-100-l.h-75",[
                m("div.pa3.fixed-ns.w-100.f3-ns.f4.tc.bg-dark-gray.washed-yellow.shadow-3","TIC TAC TOE"),
                m("div.pt5-ns.flex-l.flex-row.h-100",[
                    
                    m("div.order-1-l.w-50-l.w-100.h-100-l.h-100.flex.flex-row.items-center.justify-center",
                    [
                        m("div.h-75-l.h-50.h-75-ns.w-75-l.w-50-ns.flex.flex-row.flex-wrap.items-center.justify-center.items-stretch",{style: {"min-width":"290px"}},
                        [
                            m("button#1.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.flex.justify-center.items-center.f-6-l.f-headline-l.f2", ""),
                            m("button#2.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.ba.bb-0.bt-0.b--black.bw3.flex.justify-center.items-center.f-6-l.f-headline-l.f2",""),
                            m("button#3.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.flex.justify-center.items-center.f-6-l.f-headline-l.f2",""),
                            m("button#4.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.ba.br-0.bl-0.b--black.bw3.flex.justify-center.items-center.f-6-l.f-headline-l.f2",""),
                            m("button#5.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.ba.b--black.bw3.flex.justify-center.items-center.f-6-l.f-headline-l.f2",""),
                            m("button#6.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.ba.bl-0.br-0.b--black.bw3.flex.justify-center.items-center.f-6-l.f-headline-l.f2",""),
                            m("button#7.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.flex.justify-center.items-center.f-6-l.f-headline-l.f2",""),
                            m("button#8.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.ba.bt-0.bb-0.b--black.bw3.flex.justify-center.items-center.f-6-l.f-headline-l.f2",""),
                            m("button#9.b--washed-yellow.bg-dark-gray.washed-yellow.black.w-33.flex.justify-center.items-center.f-6-l.f-headline-l.f2",""),
                        ])
                    ]),

                    m("div.flex-l.flex-column.justify-center.items-center.w-30-l.w-50.dib.order-0-l.h-100-l[id='1']",
                    [
                        m("div.br.bw1.bw0-l.flex.flex-column.justify-center.items-center",
                        [
                            m("div.bb.bw2.bw0-l.w-100.tc.f2-ns.f1-l.f3.pa2-l.pa1.pv3.mb4.mb3-l.dark-gray","PLAYER- 1"),
                            m("div.w-100.flex.flex-row-ns.flex-column.justify-center.items-center",
                            [
                                m("div.w-50.tc.br-ns.bw1-ns",
                                [
                                    m("h3.bb.ma0.bw2.pv3-ns.ml2.f3-ns.dark-gray","Wins"),
                                    m("h3#w1.f3-ns.dark-gray","0")
                                ]),
                                m("div.w-50.tc.bl-ns.bw1-ns",
                                [
                                    m("h3.bb.ma0.bw2.pv3-ns.mr2.f3-ns.dark-gray","Losses"),
                                    m("h3#l1.f3-ns.dark-gray","0")
                                ]),
                            ])
                        ])
                    ]),

                    m("div.flex-l.flex-column.justify-center.items-center.w-30-l.w-50.dib.order-2-l.h-100-l[id='1']",
                    [
                        m("div.bl.bw1.bw0-l.flex.flex-column.justify-center.items-center",
                        [
                            m("div.bb.bw2.bw0-l.w-100.tc.f2-ns.f1-l.f3.pa2-l.pa1.pv3.mb4.mb3-l.dark-gray","PLAYER-2"),
                            m("div.w-100.flex.flex-row-ns.flex-column.justify-center.items-center",
                            [
                                m("div.w-50.tc.br-ns.bw1-ns",
                                [
                                    m("h3.bb.ma0.bw2.pv3-ns.ml2-ns.f3-ns.dark-gray","Wins"),
                                    m("h3#w2.f3-ns.dark-gray","0")
                                ]),
                                m("div.w-50.tc.bl-ns.bw1-ns",
                                [
                                    m("h3.bb.ma0.bw2.pv3-ns.mr2-ns.f3-ns.dark-gray","Losses"),
                                    m("h3#l2.f3-ns.dark-gray","0")
                                ]),
                            ])
                        ])
                    ])

                ]),
                m("script",{src:"working.js"})
            ])
        ])
    }
}

m.route(root, "/InstructionScreen" , {
    "/FirstScreen": FirstScreen,
    "/InstructionScreen": InstructionScreen,
    "/GameScreen": GameScreen,
})