const personnages = [
    {
        id : 1,
        nom: `Naruto`,
        history:`Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) est un ninja du village caché de Konoha.  Il devint le jinchûriki de Kyûbi le jour de sa naissance — ce qui lui valut d'être rejeté par la plupart des habitants de Konoha durant toute son enfance.<br> Après avoir rejoint l'Équipe 7, Naruto travailla dur pour obtenir la reconnaissance des villageois tout en poursuivant son rêve de devenir Hokage.  Dans les années qui suivirent, après de nombreuses péripéties et épreuves, il devint un ninja considéré comme un héros par les villageois et plus tard par le reste du monde.  Il prouva rapidement être l'un des acteurs majeurs de la Quatrième Grande Guerre Shinobi, lui permettant de réaliser son rêve et de devenir le Septième Hokage (七代目火影, Nanadaime Hokage, signifiant littéralement : Septième Ombre du Feu). `,
        imageCard:`http://localhost:3000/img/narutoCard.webp`,
        imageHistory:`http://localhost:3000/img/narutoHistory.webp`,
        village: `Konoha`
    },

    {
        id : 2,
        nom: `Sasuke`,
        history:`Sasuke Uchiwa (うちはサスケ, Uchiha Sasuke) est l'un des personnages principaux de la série. Il a été initialement présenté comme un protagoniste, un membre de Konoha appartenant à l'Équipe Kakashi.  Au cours de la série, il devint de plus en plus sombre, aboutissant à une alliance avec l'Akatsuki, devenant l'un des personnages les plus dynamiques de la série.  `,
        imageCard:`http://localhost:3000/img/sasukeCard.webp`,
        imageHistory:`http://localhost:3000/img/sasukeHistory.jpg`,
        village:`Konoha`
    },

    {
        id : 3,
        nom: `Sakura`,
        history:`Sakura  (うちはサクラ, Uchiha Sakura, née Haruno (春野)) est l'un des personnages principaux de la série. Elle est une ninja médecin de niveau jônin du village caché de Konoha et membre de l'Équipe Kakashi.  Sakura est l'un des personnages de la série qui vit le plus sa personnalité se développer au fil de l'histoire. Au départ, elle apparaissait comme une jeune fille égoïste et relativement imbue de sa personne.  Elle avait aussi tout de la parfaite préadolescente « sans cervelle » amoureuse du garçon le plus beau et le plus fort de la classe (comme toutes les autres filles) et plus soucieuse de son apparence que de son ninjutsu.  D'ailleurs ce souci de l'image qu'elle donnait aux autres faisait que la plus part du temps, Sakura n'exprimait pas ce qu'elle ressentait vraiment. C'est son for intérieur qui s'exprimait alors. Elle était par contre plus directe avec Naruto qu'elle ne supportait pas au début de l'histoire.  Peu à peu, pourtant, le personnage se forgea le caractère. Sakura qui ne voyait Sasuke uniquement que comme le « garçon parfait » se rendit compte qu'il avait des défauts comme tout le monde et développa un amour plus sincère à son égard, elle fut la première à comprendre que Sasuke était prêt à abandonner le village de Konoha dans sa quête de pouvoir et que Naruto qui l'agaçait tant au début devenait pour elle un ami et même un levier à sa progression.  C'est en voulant, elle aussi, être utile à ses deux camarades que Sakura mûrit. À partir de là, on constata que le « for intérieur » de Sakura apparut de moins en moins car elle était à présent capable de s'exprimer seule. `,
        imageCard:`http://localhost:3000/img/sakuraCard.webp`,
        imageHistory:`http://localhost:3000/img/sakuraHistory.webp`,
        village:`Konoha`
    },

    {
        id : 4,
        nom: `Kakashi`,
        history:`Kakashi Hatake (はたけカカシ, Hatake Kakashi) est un jônin du village caché de Konoha. En tant que chef de l’Équipe 7, il est le premier mentor des principaux protagonistes de l'histoire. Il est mondialement connu pour son utilisation du Sharingan, sous le surnom du « Ninja Copieur ». Suite à la Quatrième Grande Guerre Shinobi, il devint le Sixième Hokage (六代目火影, Rokudaime Hokage, signifiant littéralement : Sixième Ombre du Feu). `,
        imageCard:`http://localhost:3000/img/kakashiCard.webp`,
        imageHistory:`http://localhost:3000/img/kakashiHistory.jpg`,
        village:`Konoha`
    },

    {
        id : 5,
        nom: `Itachi`,
        history:`Itachi Uchiwa (うちはイタチ, Uchiha Itachi) était un membre de l'Anbu issu du célèbre clan Uchiwa du village de Konoha. Il tua les membres de son clan dans ce qui sera plus tard connu comme le massacre du clan Uchiwa et déserta son village, devenant un ninja déserteur (Nukenin) de Rang S et un membre de l'Akatsuki qui devint partenaire avec Kisame Hoshigaki.  `,
        imageCard:`http://localhost:3000/img/itachiCard.webp`,
        imageHistory:`http://localhost:3000/img/asumaHistory.jpg`,
        village:`Konoha`
    },

    {
        id : 6,
        nom: `Asuma`,
        history:`Asuma Sarutobi (猿飛アスマ, Sarutobi Asuma) était un jônin de Konoha du clan Sarutobi, ainsi qu'un ancien membre des Douze Ninjas Gardiens. Il fut également le chef de l'Équipe 10. Asuma est le fils de Hiruzen et Biwako Sarutobi, et quelques années plus tard, allait devenir l'oncle de Konohamaru Sarutobi. À l'époque de l'attaque de Kyûbi sur Konoha, il lui fut interdit, au même titre que les autres jeunes ninjas, par le père de Kurenaï Yûhi de participer à la défense du village.[5]À un moment donné, il eut un désaccord avec son père, et il quitta Konoha afin de poursuivre ses intérêts personnels. Durant son absence, il devint l'un des Douze Ninjas Gardiens, un groupe qui protégeait le Daimyô du Feu, indiqué par la ceinture sur sa taille. Pendant ce temps, il développa une solide amitié avec le moine Chiriku, qui allait devenir le moine en chef du temple du feu. Avant de retourner à Konoha pour reprendre activement son service militaire, il accumula une prime de 35 millions de Ryô sur le marché noir, ce dont il semblait être particulièrement fier.[6] `,
        imageCard:`http://localhost:3000/img/asumaCard.webp`,
        imageHistory:`http://localhost:3000/img/asumaHistory.jpg`,
        village:`Konoha`
    },

    {
        id : 7,
        nom: `Kurenai`,
        history:`Kurenaï Sarutobi (猿飛紅, Sarutobi Kurenai, née Yûhi (夕日)) est une kunoichi de rang jônin de Konoha en charge de l'Équipe 8, composée de Kiba Inuzuka, Shino Aburame et Hinata Hyûga. Kurenaï était présente au village de Konoha au moment de l'attaque de Kyûbi. Alors âgée d'une quinzaine d'année et encore chûnin elle voulait comme tous ceux de son âge participer au combat contre le renard. Mais son père qui voulait protéger cette jeune génération les en empêchera et demandera à sa fille de vivre assez longtemps pour à son tour donner naissance à une nouvelle génération porteuse de la volonté du village. `,
        imageCard:`http://localhost:3000/img/kurenaiCard.webp`,
        imageHistory:`http://localhost:3000/img/kurenaiHistory.jpg`,
        village:`Konoha`
    },

    {
        id : 8,
        nom: `Chôji`,
        history:`Chôji Akimichi (秋道チョウジ, Akimichi Chôji) est l'un des principaux protagonistes de la série Naruto. C'est un chûnin du village caché de Konoha, membre du clan Akimichi et de l'Équipe Asuma, formée à l'origine par Asuma Sarutobi. Aux côtés de Shikamaru Nara et Ino Yamanaka ils forment le nouveau trio « Ino-Shika-Chô », comme leurs pères avant eux. Il est le seizième chef du clan Akimichi. Durant son enfance, Chôji était mis à l'écart et méprisé par les autres enfants : en effet, il n'était pas très bon quand il s'agissait de « jouer au ninja ». D'après eux, n'importe quelle équipe dans laquelle il se trouvait étant sûre de perdre, il valait mieux l'empêcher de jouer. Le jour où Chôji fit la connaissance de Shikamaru, celui-ci tenta tout de même de l'intégrer au jeu, marquant le début de leur amitié.  `,
        imageCard:`http://localhost:3000/img/chôjiCard.webp`,
        imageHistory:`http://localhost:3000/img/chôjiHistory.jpg`,
        village:`Konoha`
    },

    {
        id : 9,
        nom: `Shikamaru`,
        history:`Shikamaru Nara (奈良シカマル, Nara Shikamaru) est un membre du clan Nara de Konoha. Bien que paresseux par nature, Shikamaru possède une intelligence telle qu'elle lui permet de toujours prendre l'avantage en combat. Les responsabilités qui lui incombent du fait de ses succès lui provoquent fréquemment de l'ennui, mais il les accepte volontiers pour ainsi être au service de ses coéquipiers de l'Équipe Asuma et pour prouver sa valeur aux générations passés et futures. Shikamaru est l'unique enfant de Yoshino et Shikaku Nara. C'est très tôt dans leur enfance que Shikamaru et Chôji sont devenus amis. À l'époque Chôji, plutôt rond et pataud était exclu des jeux des autres enfants. Shikamaru décida de prendre le contre pied des autres et de se lier d'amitié avec lui. Il invita Chôji à regarder avec lui les nuages dans son lieu préféré pour cela. Depuis, les liens qui les unissent n'ont jamais fléchi, et chacun a en l'autre une confiance totale.

        À l'Académie, Shikamaru faisait parti avec Naruto, Kiba, et Chôji des cancres de l'école. Ils furent souvent punis par leur sensei, Iruka Umino, que leur imposait de rester immobile, une feuille d'arbre sur la tête. Ces résultats scolaires ne valent pas mieux que ce de Naruto, et la plupart du temps lors des examens, il s'endormait avant même d'avoir commencé à écrire.  `,
        imageCard:`http://localhost:3000/img/shikamaruCard.webp`,
        imageHistory:`http://localhost:3000/img/shikamaruHistory.jpg`,
        village:`Konoha`
    },

    {
        id : 10,
        nom: `Lee`,
        history:`
        Rock Lee (ロック・リー, Rokku Rî) est shinobi du clan Lee de Konoha. Lorsque Lee était enfant et étudiant à l'Académie de Konoha, il ne possédait aucun talent pour le ninjutsu et le genjutsu. Les autres enfants se moquaient sans cesse de lui, persuadés qu'avec de telles lacunes il ne parviendrait jamais à devenir ninja. Pourtant Lee, loin de se décourager décida de se spécialiser dans le taijutsu, seul domaine qu'il maîtrisait, afin de pouvoir réaliser son rêve de devenir ninja. Quand il obtint enfin son diplôme de genin et que Gaï Maito son nouveau sensei lui demanda quel était son rêve, Lee répondit qu'il souhaitait devenir un grand ninja spécialiste du Taijutsu. Si Neji le génie se moqua de ce rêve idiot ce ne fut pas le cas de Gaï. En effet, le maître se reconnaissait parfaitement dans cet enfant, ayant lui aussi souffert dans son enfance des mêmes lacunes face au génie Kakashi Hatake. Dès lors le maître et l'élève seront très liés, Lee allant même jusqu'à adopter le style vestimentaire et la coupe de cheveux de son aîné. `,
        imageCard:`http://localhost:3000/img/leeCard.webp`,
        imageHistory:`http://localhost:3000/img/leeHistory.jpg`,
        village:`Konoha`
    },

    {
        id : 11,
        nom: `Konohamaru`,
        history:`Konohamaru Sarutobi (猿飛木ノ葉丸, Sarutobi Konohamaru), est shinobi du clan Sarutobi du village caché de Konoha. Il s'efforce à être un jour aussi fort que son idole, Naruto Uzumaki. Konohamaru naquit au sein du clan Sarutobi et fut nommé d'après Konoha par son grand-père. Bien qu'ayant été élevé par ses parents membres de l'Anbu,[7] Konohamaru n'est jamais appelé par son nom par les villageois, il était seulement appelé « Honorable Petit-Fils » (お孫様, Omago-sama) du fait de sa parenté avec le Hokage. Voulant être reconnu comme une personne et non seulement le petit fils du Hokage, Konohamaru commença à tenter de vaincre Hiruzen afin de le remplacer en tant que Hokage. Même si Konohamaru et Naruto font semblant d'être des rivaux, les deux ont clairement une relation profonde et une compréhension l'un de l'autre, qui va bien au-delà des frontières d'une relation mentor/protégé. Konohamaru idolâtre Naruto d'une manière comme personne d'autre, ce qui a également été démontré lors des deux premières saisons réunies, avec Konohamaru appelant Naruto « Chef » (親分, Oyabun). Il se confia à Naruto et lui dit qu'il était triste parce que personne ne le voyait pour ce qu'il est réellement ; au contraire, ils ne voyaient en lui le petit-fils du Troisième Hokage et a toujours été appelé « honorable petit-fils » (お孫様, Omago-sama) au lieu de Konohamaru. Il aimait Naruto parce qu'il pensait qu'ils étaient similaires. Ils sont finalement devenus très proches, Konohamaru appelant constamment Naruto « Nii-san  (signifiant littéralement : Grand frère)», qui peut être traduit par grand frère, et Naruto a également enseigné quelques techniques à Konohamaru, dans lesquelles ce dernier excelle. Comme Naruto, Konohamaru rêve de devenir Hokage ; toutefois, il se contente d'attendre d'être le Septième Hokage, comme il est parfaitement convaincu que Naruto allait succéder à Tsunade, en tant que Sixième Hokage  Naruto devint finalement le Septième, succédant à Kakashi.  `,
        imageCard:`http://localhost:3000/img/konohamaruCard.webp`,
        imageHistory:`http://localhost:3000/img/konohamaruHistory.png`,
        village:`Konoha`
    },

    {
        id : 12,
        nom: `Tsunade`,
        history:`Tsunade (綱手, Tsunade) est l'une des légendaires Sannin de Konoha. Considérée dans le monde comme la plus forte des kunoichi[5] et la plus grande ninja médecin,[6] la mort répétée des êtres lui étant les plus chers firent que Tsunade abandonna la vie de shinobi pendant plusieurs années. Elle fut finalement persuadée de retourner à Konoha et devint le Cinquième Hokage (五代目火影, Godaime Hokage, signifiant littéralement : Cinquième Ombre du Feu), où ses compétences s'avérèrent précieuses pour le village. Tsunade est la petite-fille du Premier Hokage, fondateur du village caché de Konoha, ainsi que la petite-nièce du Deuxième, ce qui lui valut son titre de « Princesse » (姫, Hime). De fait aussi, même si elle n'en porte pas le nom de famille, Tsunade est une descendante du fameux clan Senju.

        Elle fut formée aux arts ninja, en compagnie de Jiraya et Orochimaru, par le Troisième Hokage, Hiruzen Sarutobi. À l'époque, il est amusant de constater qu'elle était surnommée par Jiraya « La planche à pain » en raison de son absence totale de poitrine. Les choses avaient bien changé car d'après les estimations de ce même Jiraya elle ferait aujourd'hui du 106 de tour de poitrine.
        
        Jiraya, bien que toujours repoussé (et parfois même de façon extrêmement violente, voire mortelle), fut depuis cette époque un éternel prétendant de Tsunade. C'est au cours de la Seconde Grande Guerre Ninja que le trio se distingua. C'est Hanzô, puissant chef du village d'Ame à l'époque, impressionné par ces trois ninjas capables de survivre à la bataille et de lui tenir tête, qui leur donna le titre qu'ils conservèrent dès lors, celui de « Légendaire Sannin » (伝説の三忍, Densetsu no Sannin). Puis, suite à cela, Jiraya resta quelques temps à Ame pour s'occuper d'orphelins, alors qu'Orochimaru et Tsunade retournèrent au village de Konoha. C'est aussi au cours de cette Grande Guerre que Tsunade montra l'étendu de ses talents de ninja médecin, notamment sur le front face au village de Suna. Elle parvint ainsi à trouver des antidotes capables de contrer tous les poisons de Chiyo de Suna, pourtant réputée en la matière. `,
        imageCard:`http://localhost:3000/img/tsunadeCard.webp`,
        imageHistory:`http://localhost:3000/img/tsunadeHistory.png`,
        village:`Konoha`
    },

    {
        id : 13,
        nom: `Gaara`,
        history:`Gaara (我爱罗, Gaara) est un ninja du village caché du Sable (Suna). Il est également le benjamin des enfants du Quatrième Kazekage, le petit frère de Kankurô et Temari. Il était le troisième jinchûriki de Shukaku,[8] étant ainsi devenu une arme pour Suna, il acquit le surnom de « Gaara du Désert » (砂瀑の我愛羅, Sabaku no Gaara, signifiant littéralement : Gaara des Chutes de Sable). Bien que Gaara ait été un antagoniste majeur du manga Naruto, au fur et à mesure de la progression de l'histoire, il devint l'un des protagonistes principaux. Dans la partie II, il devint le Cinquième Kazekage (五代目風影, Godaime Kazekage, signifiant littéralement : Cinquième Ombre du Vent), ainsi que Commandant Général et général de la quatrième division de l'Alliance Shinobi pendant la Quatrième Grande Guerre Shinobi. Avant la naissance de Gaara, le Quatrième Kazekage demanda à Chiyo de sceller dans le corps de son fils à naître le Shukaku. En effet, depuis plusieurs années déjà, et plus précisément depuis la disparition du Troisième Kazekage, le village de Suna était fortement affaibli, tant sur le plan politique, économique que militaire. Le Quatrième espérait donc faire de son cadet la nouvelle arme ultime du village du Sable, et ainsi lui rendre sa gloire passée. Toutefois, pour faire de Gaara le nouveau jinchûriki du village, le Quatrième dut sacrifier sa femme. En effet, l'opération de scellement devait irrémédiablement causer son décès.  `,
        imageCard:`http://localhost:3000/img/gaaraCard.webp`,
        imageHistory:`http://localhost:3000/img/gaaraHistory.jpg`,
        village:`Suna`
    },

    {
        id : 14,
        nom: `Kankurô`,
        history:`Kankurô (カンクロウ, Kankurô) est un ninja-marionnettiste du village caché de Suna. Il est le fils du Quatrième Kazekage et le frère de Gaara (actuel Kazekage) et de Temari. On ne sait pas grand chose de l'enfance de Kankurô. Mais il semblerait qu'enfant, ni lui, ni Temari ne furent proches de leur frère cadet, Gaara. Si ce dernier fut élevé par Yashamaru, il semblerait qu'eux le furent par leur père. Ils apprirent toutefois dès leur plus jeune âge à craindre ce frère porteur d'un démon à queues. On sait que la première fois que Kankurô assista à la transformation de Gaara, suite au « Sommeil du Tanuki » il en perdit l’appétit face à cette vision d'horreur.
        Après le décès de Yashamaru, la fratrie fut réunie afin de former un groupe de genin sous la tutelle de Baki. De fait, Kankurô se présenta tardivement à l'Examen Chûnin afin de le passer en même temps que son frère cadet. Lorsqu'il apparaît pour la première fois dans le manga, Kankurô a tout de la racaille irritable, s'en prenant sans raison à plus petit que lui (à Konohamaru Sarutobi notamment), et ce malgré les oppositions de sa sœur Temari. Cela est d'ailleurs renforcé dans la version originale par le fait que Kankurô parle avec l'accent de Yokohama (il finit ses phrases par « jaan ») qui est un dialecte très parlé par ceux que l'on surnomme les « yankee », des mauvais garçons, membres de gangs.

        Mais très vite, on se rend compte que l'aversion de Kankurô pour les « sales mioches » lui vient de son petit frère. En effet, Gaara n'est alors qu'une machine à tuer, psychologiquement instable, donnant des ordres, mais n'écoutant jamais ses aînés. Bien que le plus souvent, la peur que lui inspire son petit frère empêche Kankurô d'entrer directement en conflit avec lui, il arrive toutefois, comme dans la forêt de la mort durant l'Examen Chûnin, à réclamer de la part de Gaara plus de respect. Cependant, ces emportements ne sont pas sans risques pour sa vie, et c'est souvent alors à Temari de calmer le jeu, pour empêcher le massacre.   `,
        imageCard:`http://localhost:3000/img/kankurôCard.webp`,
        imageHistory:`http://localhost:3000/img/kankurôHistory.jpg`,
        village:`Suna`
    },

    {
        id : 15,
        nom: `Temari`,
        history:`Temari Nara (奈良テマリ, Nara Temari) est une kunoichi du village caché de Suna, membre du clan du Kazekage et aînée de la Fratrie du Sable. Elle devient un membre du village de Konoha en se mariant avec Shikamaru Nara. On ne sait pas grand chose de l'enfance de Temari. Mais il semblerait qu'enfant, ni elle, ni Kankurô ne furent proches de leur frère cadet, Gaara. Si ce dernier fut élevé par Yashamaru, il semblerait qu'eux le furent par leur père. Ils apprirent toutefois dès leur plus jeune âge à craindre ce frère porteur d'un démon à queues. Étant la fille du Quatrième Kazekage et de ce fait, membre du clan du Kazekage, elle intimidait les enfants de son âge qui la fuyaient. Le seul enfant à passer du temps avec elle était Daimaru qui lui faisait des farces à longueur de temps. Il semblerait qu'elle s'entendait également avec Sen et Yome. Après le décès de Yashamaru, la fratrie fut réunie afin de former un groupe de genin sous la tutelle de Baki. De fait, Temari se présenta tardivement à l'Examen Chûnin afin de le passer en même temps que ses frères. Elle est prudente, assez stoïque et très franche. Elle n'hésite jamais à dire le fond de sa pensée, trait de caractère qu'elle transmettra à son fils, Shikadai. De prime abord, Temari peut paraître une jeune femme assez cruelle, notamment durant l'Examen Chûnin. Elle fait, avec le sourire, un « bye bye » ironique aux ninjas de l'Équipe Shigure avant que ces derniers ne se fassent massacrer par son frère Gaara.[7] Lors de son combat contre Tenten, elle fit preuve d'une extrême violence alors que la kunoichi de Konoha était déjà à bout. Pourtant, lors de l'Invasion de Konoha, elle fut la seule de son équipe à émettre une objection, refusant de laisser le traité de paix entre les deux villages être rompu, qui coûta la vie à de nombreux ninjas, mais n'eut d'autre choix que de se plier aux ordres. Elle expliqua ensuite à Shikamaru Nara qui lui reprocha le changement de camp rapide de Suna, lors de la mission de sauvetage de Sasuke, que les ninjas de Suna ne faisait pas la guerre par plaisir mais par devoir. Ils obéissaient aux ordres et ne faisaient pas de sentimentalisme. C'était sûrement en raison de cette modération, et aussi de son amitié avec Shikamaru, que dans la Partie II, elle intervint en tant qu'ambassadrice de Suna à Konoha pour l'organisation de l'Examen Chûnin. `,
        imageCard:`http://localhost:3000/img/temariCard.webp`,
        imageHistory:`http://localhost:3000/img/temariHistory.jpg`,
        village:`Suna`
    },

    {
        id : 16,
        nom: `Rasa`,
        history:`Rasa (羅砂, Rasa) était le Quatrième Kazekage (四代目風影, Yondaime Kazekage, signifiant littéralement : Quatrième Ombre du Vent) du village caché de Suna. Il commença son règne, dans une période de grande panique pour le village. En effet, Suna avait connu une longue période où ils furent totalement désemparés suite à la disparition du Troisième Kazekage. Soupçonnant les autres villages ninjas de cette disparition, le village du sable était donc entré en guerre avec tous les autres pays limitrophes s'affaiblissant ainsi économiquement.

        Lorsque le Daimyô du Pays du Vent, décida de réduire le budget militaire du village de Suna au profit de Konoha qui était une plus forte nation ninja, le Quatrième sentit le danger pour l'avenir de son village. La démilitarisation et les traités de paix entre les nations signifiaient la fin pour les ninjas.
        
        Il décida donc d'augmenter la puissance de Suna en se dotant d'une arme redoutable, un bijû, Shukaku du sable, qu'il fit sceller par Chiyo dans le corps de son fils à venir, Gaara, dans l'espoir qu'il contrôle le démon et qu'il en fasse un atout et une arme majeur dans les conflits ninjas. Pour réaliser cette opération, il n'hésita pas à sacrifier sa propre femme Karura.
        
        Toutefois, Gaara n'était pas stable et le Quatrième réalisa qu'il ne pourrait jamais contrôler Shukaku à sa guise et que, pire encore, l'enfant représentait un danger pour Suna. Il essaya de faire en sorte que Gaara maîtrise Shukaku.  `,
        imageCard:`http://localhost:3000/img/rasaCard.webp`,
        imageHistory:`http://localhost:3000/img/rasaHistory.webp`,
        village:`Suna`
    },

    {
        id : 17,
        nom: `Bunpuku`,
        history:`Bunpuku (分福, Bunkuku) était un ancien prêtre de Suna et l'un des deux premiers jinchûriki de Shukaku. Bunpuku fut choisi pour devenir le jinchûriki de Shukaku. Avant de se faire enfermer, il se fit graver, par son maître, les kanji « Cœur » (心, Kokoro) et « Accepter » (受, Ukeru) dans les paumes de ses mains. Il était méprisé et craint de tous. Par conséquent, il fut enfermé dans un cachot et mit sous la surveillance des shinobi de Suna. Comme Gaara, il tenta de devenir ami avec son bijû. Durant une conversation avec celui-ci, Shukaku lui demanda s'il était ennuyé du fait que les villageois le haïsse malgré le fait qu'il soit prêtre. Bunpuku lui dit que s'il se séparait de lui, ce serait lors de sa mort en tant que jinchûriki. Par ses paroles, Bunpuku rappela le Sage des Six Chemins à Shukaku ce qui fit pleurer de joie le vieux prêtre lorsque Shukaku le lui dit qui le prit pour le plus beau compliment qu'il ait reçut. Bunpuku finit en disant que c'étaient les mots les plus aimables qu'il ait reçu du bijû. `,
        imageCard:`http://localhost:3000/img/bunpukuCard.webp`,
        imageHistory:`http://localhost:3000/img/bunpukuHistory.webp`,
        village:`Suna`
    },

    {
        id : 18,
        nom: `Chiyo`,
        history:`Chiyo (チヨ, Chiyo) est une ancienne du Village Caché du Sable, ainsi que la grand-mère du renégat Sasori. Chiyo était appelée par les habitants du village de Suna, Chiyo-baasama (チヨバア様, pouvant se traduire par « Honorable Grand-Mère Chiyo »), en raison de ses nombreux talents (spécialiste des poisons, grand maître dans l'art des marionnettistes) et de ses nombreux faits d'arme qui firent la gloire du village. Elle et son frère furent même des figures emblématiques du village connus à présent sous le nom de Vieillards Retirés (御姉弟, Gokyôdai). Dans le passé, on sait que sa grande maîtrise de l'art des marionnettes lui permit de prendre seule une forteresse, qu'elle fut déjà amenée à combattre des ninjas du Clan Uchiwa, et Hanzô, l'ancien chef d'Ame, dont elle parvint à percer les secrets du poison de sa salamandre grâce à ses incroyables connaissances en la matière. Elle participa aussi à la Seconde Grande Guerre Ninja durant laquelle elle élabora de nombreux poisons. Cependant dans le camps adverse, Tsunade de Konoha parvint à chaque fois à la contrer en élaborant les antidotes. Chiyo donna alors, à cette insupportable adversaire, le surnom de Princesse Limace (あのナメクジ娘, Ano Namekuji-musume).  `,
        imageCard:`http://localhost:3000/img/chiyoCard.webp`,
        imageHistory:`http://localhost:3000/img/chiyoHistory.jpg`,
        village:`Suna`
    },

    {
        id : 19,
        nom: `Ebizô`,
        history:`Ebizô (エビゾウ, Ebizô), appelé Honorable Grand-Père Ebizô (エビゾウジイ様, Ebizô-jiisama) par les habitants de Suna, est grandement vénéré au village caché de Suna. Lui et sa grande-sœur, Chiyo, sont connus comme l'Honorable Fratrie (御姉弟, Gokyôdai). C'est une personne très calme, réservée et apathique surtout lorsqu'on le compare à sa sœur qui était souvent impulsive dans ses actions. Il semble aussi analytique dans ses pensées. Comme Chiyo, Ebizô croit que le village devrait être assez fort pour se débrouiller lui-même sans être dépendant de la génération précédente ou des autres villages. Il montra d'ailleurs son désarroi quand les membres de son village furent impuissants à sauver Kankurô du poison. Ebizô est également décrit comme optimiste.  `,
        imageCard:`http://localhost:3000/img/ebizôCard.webp`,
        imageHistory:`http://localhost:3000/img/ebizôHistory.png`,
        village:`Suna`
    },

    {
        id : 20,
        nom: `Matsuri`,
        history:`Matsuri (マツリ, Matsuri) est une genin du village caché de Suna et est la meilleure amie de Sari. Dans l'anime, Matsuri fut témoin du meurtre de ses parents dans le passé, la rendant hostile aux armes et à la violence.Dans l'anime, Matsuri est montrée de manière plus approfondie. Elle a d'abord été une jeune fille timide avec une voix douce, mais elle devient plus courageuse et plus franche sous la tutelle de Gaara. Elle reste polie avec les autres. Alors que Matsuri est réticente à utiliser des armes à la partie I, elle a moins d'inhibitions dans le début de la partie II, elle saura utiliser des armes pour protéger ses camarades et la réputation de Suna, mais évitera de causer préjudice à autrui.

        Dans le manga, Matsuri est montrée comme une simple admiratrice de Gaara. Il est également laissé entendre qu'elle a des intérêts romantiques pour Gaara.[1] Ceci est également montré dans sa rapidité à le complimenter et à insulter toute personne suggérant qu'il pourrait être battu.   `,
        imageCard:`http://localhost:3000/img/matsuriCard.webp`,
        imageHistory:`http://localhost:3000/img/matsuriHistory.jpg`,
        village:`Suna`
    },

    {
        id : 21,
        nom: `Maki`,
        history:`Maki (マキ, Maki) est une kunoichi du village caché Suna. Maki est une membre de la Troisième Division de l'Armée de l'Alliance Ninja sous les ordres de Kakashi Hatake.Confrontée à d'anciens puissants ninjas ressuscités par Kabuto à l'aide de l'Invocation - Réincarnation des Âmes, dont les célèbres Sept Épéistes de la Brume, la Troisième Division se retrouva vite en difficulté.
        
        Kakashi établit donc un plan d'action afin d'arrêter ces adversaires immortels. Il demanda à Maki d'emprisonner les ninjas ennemis à l'aide de sa technique de toile, après qu'il les ait immobilisés à l'aide de son attaque et de la Manipulation des Ombres des membres du clan Nara de l'équipe.
        
        Une fois que Kakashi eut vaincu Haku et Zabuza Momochi, Maki les enferma dans un cocon de toile scellé d'un sceau, empêchant ainsi qu'ils ressuscitent à nouveau.  `,
        imageCard:`http://localhost:3000/img/makiCard.webp`,
        imageHistory:`http://localhost:3000/img/makiHistory.jpg`,
        village:`Suna`
    },

    {
        id : 22,
        nom: `Yashamaru`,
        history:`Yashamaru (夜叉丸, Yashamaru) était un Anbu du village caché de Suna. Il était également le bras droit du Quatrième Kazekage. La sœur aînée de Yashamaru, Karura, mourut peu après avoir donné naissance à son plus jeune fils Gaara, en qui le Shukaku à Une Queue avait été scellé. Après sa mort, Yashamaru fut nommé tuteur de Gaara par le Quatrième Kazekage. Contrairement à ses concitoyens, il tenta de comprendre la détresse de son neveu en tant que jinchûriki, et croyait que le sable qui volait au secours de Gaara dans les moments de danger était en fait la volonté de Karura protégeant son enfant.[4][5][6] Cependant, lorsque l'incapacité de Gaara à contrôler Shukaku s'avéra être un problème, le Quatrième Kazekage chargea Yashamaru de s'attaquer au garçon à la fois physiquement et psychologiquement afin de tester sa maîtrise réelle du pouvoir de la bête. Yashamaru accepta son rôle à contrecœur afin d'apprendre à Gaara la douleur physique, la douleur émotionnelle et l'amour.`,
        imageCard:`http://localhost:3000/img/yashamaruCard.webp`,
        imageHistory:`http://localhost:3000/img/yashamaruHistory.jpg`,
        village:`Suna`
    },

    {
        id : 23,
        nom: `Sasori`,
        history:`Sasori (サソリ, Sasori), aussi connu sous le nom de Sasori du Sable Rouge (赤砂のサソリ, Akasuna no Sasori)[3], était un nukenin de Rang S du village caché de Suna, ayant fait partie du Régiment des Marionnettistes, et un membre de l'Akatsuki où il fit équipe avec Orochimaru et plus tard, Deidara. Alors qu'il était enfant, les parents de Sasori furent tués par Sakumo Hatake.[4] Devenu alors orphelin, c'est sa grand-mère, Chiyo l'ancienne de Suna, qui l’éleva et prit soin de lui. Pour égayer la vie de l'enfant très marqué sentimentalement par le décès de ses parents, elle lui enseigna l'art de fabriquer des marionnettes, et Sasori s’avère être né avec un don particulier pour cela. Il commença à créer ses propres pantins à l'âge de cinq ans, allant jusqu'à créer deux marionnettes à l'effigie de ses parents pour oublier sa solitude.`,
        imageCard:`http://localhost:3000/img/sasoriCard.webp`,
        imageHistory:`http://localhost:3000/img/sasoriHistory.jpg`,
        village:`Suna`
    },

    {
        id : 24,
        nom: `Baki`,
        history:`Baki (バキ, Baki) est un jônin du village de Suna et un membre du conseil consultatif de Suna. Baki apparait comme un ninja froid, partageant les idées du Quatrième Kazekage sur la dangerosité des traités de paix pour le monde des ninjas basé sur la guerre. Il est aussi, comme la plupart des ninjas du sable, sans pitié en combat, exécutant froidement les ordres. Cependant cette détermination tient surtout à une loyauté sans faille à Suna. Il agit toujours dans l'intérêt de son pays, et est capable de prendre des décisions rapides dans ce sens. Ainsi, c'est lui qui mit un terme à l'alliance passée avec le village d'Oto quand il apprit que ce dernier les avait manipulé, et qu'il était responsable de l'assassinat du Quatrième Kazekage. C'est aussi lui qui, pendant l'attaque contre le nouveau Kazekage Gaara par Deidara, ordonna la protection de la population de Suna, et qui après prit l'initiative d'aller chercher de l'aide auprès de Chiyo et Ebizô, les deux anciens du village. `,
        imageCard:`http://localhost:3000/img/bakiCard.webp`,
        imageHistory:`http://localhost:3000/img/bakiHistory.webp`,
        village:`Suna`
    },

    {
        id : 25,
        nom: `Shodai`,
        history:`Au cours de son mandat à la tête de Kumo, après l'Époque de la Guerre des Provinces, A envoya vraisemblablement les Frères d'Or et d'Argent pour capturer Kyûbi, une tâche à laquelle ils échouèrent finalement.[2] Il offrit également des terres dans la Vallée des Nuages et de la Foudre au Clan Yotsuki en échange de leur loyauté. Lors de la première réunion des cinq Kage pendant la Première Grande Guerre Shinobi, il est accompagné par le futur Deuxième Raikage ; son garde du corps de longue date.[1] Il s'assit aux côtés des autres Kage et dit à Hashirama que le fait de s'incliner devant les autres Kage n'était pas dignes d'un chef de son envergure. Après avoir demandé au Premier Kazekage de donner suite à sa demande subsidiaire, puisque Suna avait déjà un démon à queues, il exprima son indignation lorsque le Kazekage demanda à recevoir de Konoha 30 % de ce qu'ils seraient prêts à débourser pour un démon à queues. Alors que des luttes intestines éclataient et que Hashirama Senju leur demandait de préserver l'avenir de leurs enfants et de s'unir, il regarda avec attention.`,
        imageCard:`http://localhost:3000/img/shodaiCard.webp`,
        imageHistory:`http://localhost:3000/img/shodaiHistory.jpg`,
        village:`Kumo`
    },

    {
        id : 26,
        nom: `Nidaime`,
        history:`A (エー, Ê) était le Deuxième Raikage (二代目雷影, Nidaime Raikage, signifiant littéralement : Deuxième Ombre de la Foudre) du village caché de Kumo. Avant de devenir le Deuxième Raikage, il était le garde du Premier Raikage.[1] Lors de la Première Grande Guerre Shinobi, il l'accompagna au tout premier Sommet des Cinq Kage. Là, il se tenait derrière le premier observant le conseil.[2] Durant son mandat, le Deuxième Raikage de Kumo signa une alliance formelle avec Konoha. Pendant la cérémonie, A et le Deuxième Hokage furent pris en embuscade par les frères Or et Argent, qui tentèrent de mettre en scène un coup d'État. On ne sait pas ce qui arriva au Raikage, mais il est dit que le Hokage s'échappa en frôlant de peu la mort `,
        imageCard:`http://localhost:3000/img/nidaimeCard.webp`,
        imageHistory:`http://localhost:3000/img/nidaimeHistory.png`,
        village:`Kumo`
    },

    {
        id : 27,
        nom: `Yondaime`,
        history:`A (エー, Ê) est le Quatrième Raikage (四代目雷影, Yondaime Raikage, signifiant littéralement : Quatrième Ombre de la Foudre) du village de Kumo. A faisait partie de l'équipe spéciale constituée par son père, le Troisième Raikage, pour lutter contre Hachibi. Quand il était un jeune homme, son père décida de lui choisir un frère qui puisse lui servir d'équipier ou de garde du corps parmi les jeunes garçons talentueux de Kumo. Il leur faisait passer des tests de force avec A sur des mannequins, en faisant un double Lariat. Tous les enfants échouaient, mais un très jeune garçon arriva à décapiter le mannequin avec un double Lariat parfait. Le Troisième Raikage le nomma « B », et lui et A ne se quittèrent plus.[4] Avec la technique de combat à trois épées de B et le Raiton de A, ils devinrent célèbres sous le nom du duo A et B et le double Lariat devint leur signature. Après que le cousin de A, le réceptacle de Hachibi ait échoué dans sa tentative de contrôler le démon et soit mort en le laissant s'échapper, Hachibi se déchaîna dans le village et A, avec l'équipe du troisième Raikage intervint. C'est lui qui trancha une corne du bijû après que le démon empala le Père de Motoï. Le Troisième scella le démon dans le Vase d'Ambre et décida que B serait le prochain réceptacle. `,
        imageCard:`http://localhost:3000/img/yondaimeCard.webp`,
        imageHistory:`http://localhost:3000/img/yondaimeHistory.jpg`,
        village:`Kumo`
    },

    {
        id : 28,
        nom: `Godaime`,
        history:`Darui (ダルイ, Darui) est un ninja de niveau jônin du village de Kumo[4] et le bras droit du Quatrième Raikage.[5] Il lui succéda plus tard pour devenir le Cinquième Raikage (五代目雷影, Godaime Raikage, signifiant littéralement : Cinquième Ombre de la Foudre). Darui était autrefois un élève du Troisième Raikage. Au cours de sa formation, Darui apprit à utiliser le Ranton. Darui est une personne facile à vivre et mûre, comme vu lorsque le Quatrième Raikage sortit de son palais par la fenêtre, détruisant une partie du mur par la même occasion, il dit alors à C qu'il allait sortir par la porte d'entrée. Sa personnalité est aussi mise en évidence de par sa façon paresseuse et indolente de parler, faisant souvent références aux choses ou événements comme étant « Naze » (だるい, Darui) — un jeu de mots sur son nom. Tout en ayant un comportement décontracté cependant, Darui n'est pas paresseux, sautant à la défense du Raikage quand les gardes du corps des autres Kage réagirent à la destruction du bureau par le Raikage où il était assis.[7] Darui est une personne s'excusant pour tout, et s'excusera même des agissements des autres personnes — un trait qu'il affirma ne pas avoir remarqué lui-même ; ce trait de caractère lui fait dire « Désolé » (すみません, Sumimasen) aussi souvent que le mot « Naze ». Il est aussi très loyal envers le Quatrième Raikage qu'il appelle souvent « Boss » (ボス, Bosu, Français : Chef, Patron), plutôt que d'ajouter le suffixe « sama » à son titre comme le font les autres. Le Quatrième en retour, considère Darui comme son « Bras-droit »,[5] et à cause de ça, Darui défendra aussitôt le Raikage verbalement comme il le ferait physiquement. `,
        imageCard:`http://localhost:3000/img/daruiCard.webp`,
        imageHistory:`http://localhost:3000/img/godaimeHistory.webp`,
        village:`Kumo`
    },

    {
        id : 29,
        nom: `C`,
        history:`C (シー, Shî, Kana : Shî) est un jônin du village caché de Kumo. Contrairement à son partenaire Darui, C est décrit comme un individu très sérieux et mature, normalement montré avec un look plein d'assurance ainsi qu'une grande confiance en lui visible sur son visage. Il fait souvent passer son sens du devoir avant tout, comme quand il dit à Darui qu'il n'y avait pas de temps pour se reposer lorsqu'ils étaient de retour au village après le Sommet des Kage du fait qu'ils devaient commencer à se préparer à la guerre. Il semble aussi avoir une légère aversion pour les ninjas de Konoha, appelant le groupe de Naruto « chiens de Konoha ». `,
        imageCard:`http://localhost:3000/img/cCard.webp`,
        imageHistory:`http://localhost:3000/img/cHistory.png`,
        village:`Kumo`
    },

    {
        id : 30,
        nom: `Ginkaku`,
        history:`Ginkaku (銀角, Ginkaku) était un membre de la Brigade Kinkaku, une unité de ninja de Kumo, spécialisée dans la traque. Bien avant Konoha, Kumo tenta de s'approprier les pouvoirs de Kyûbi.[1] Au cours d'un des affrontements entre le Démon à Neuf Queues et les shinobi du village caché du Pays de la Foudre, les deux Frères d'Or et d'Argent furent avalés par Kyûbi.[1] Durant deux semaines, ils se nourrirent des entrailles de Kyûbi, continuant de le frapper de l'intérieur pour que ce dernier les vomisse. Ces deux semaines permirent à Ginkaku et Kinkaku de détenir le chakra de Kyûbi.[2] Le nom de la Brigade Kinkaku fut cité dans un souvenir de Danzô Shimura. Ce fut une vingtaine d'hommes de cette unité qui, par le passé, avaient acculé le Deuxième Hokage et ses élèves. Ce fut à ce moment que le Deuxième Hokage nomma Hiruzen Sarutobi Troisième Hokage, avant de se sacrifier en retenant le plus possible les membres de la Brigade Kinkaku pour permettre à ses protégés de fuir.`,
        imageCard:`http://localhost:3000/img/ginkakuCard.jpg`,
        imageHistory:`http://localhost:3000/img/ginkakuHistory.jpg`,
        village:`Kumo`
    },

    {
        id : 31,
        nom: `Motoï`,
        history:`Motoi (モトイ, Motoi) est un shinobi du village caché de Kumo qui est stationné sur Genbu. Il était le meilleur ami de Killer B, jusqu'au jour où le démon Hachibi (démon à 8 queues) qui était scellé dans le cousin de Killer B se déchaina et tua le père de Motoï quand celui-ci et d'autres ninjas tentèrent de le sceller dans le Kohaku no Jôhei. B fut choisi pour être le nouveau jinchûriki de Hachibi. Motoï essaya de le tuer, voulant tuer le démon et, par la même occasion, venger la mort de son père. Il n'y arrivera pas et, rongé par la honte, il ne parlera pas à B pendant 30 ans. Motoï accueillit Naruto Uzumaki, Killer B, Yamato, Aoba Yamashiro et Gaï Maito sur l'Île-Tortue suite à la décision de cacher les jinchûriki de Hachibi et de Kyûbi. Motoï attendit avec Aoba et Gaï chez lui, quand Gaï eut envie de voir Naruto. Arrivé aux chutes, Gaï tenta l'épreuve mais ouvrit les yeux pour tomber nez à nez avec Kisame Hoshigaki tentant de s'enfuir. Motoï utilisa ses capacités sensorielles pour trouver vers où s'enfuyait Kisame. Ils le capturèrent et tentèrent d'obtenir des informations mais il se suicida en se faisant dévorer par des requins qu'il avait invoqués. Ils voulaient voir les informations qu'il avait collectées, mais ils tombèrent dans un piège et un requin prit la fuite avec le rouleau contenant les informations collectées. Comme B n'avait pas pu le rattraper, Motoï invoqua un hibou pour qu'il prévienne le Raikage de la fuite d'informations. `,
        imageCard:`http://localhost:3000/img/motoiCard.webp`,
        imageHistory:`http://localhost:3000/img/motoiHistory.webp`,
        village:`Kumo`
    },


    {
        id : 32,
        nom: `Omoï`,
        history:`Omoï (オモイ, Omoi) est un shinobi de Kumo, et un membre de l'Équipe Samui. Omoï est très prudent et soucieux du détail. Sa tendance à exagérer les situations et à se poser trop de questions qui énerve considérablement sa coéquipière Karui. En effet, il s'imagine souvent des scénarios catastrophes improbables. Omoï aime se jouer du caractère impulsif de Karui, cependant les issues sont souvent douloureuses pour lui. Il accorde un certain respect à ceux qui tiennent leur parole, même s'il s'agit d'un ennemi. Pessimiste de nature, il n'en reste pas moins intelligent et il sait faire face au danger quand nécessaire. Il est prêt à tout donner pour défendre ses principes, comme lorsqu'il voit que le frère de Saï ressuscité, Shin, est forcé de se battre : Omoï ne l'accepte pas et décide de mettre fin à la manipulation. Il a toujours une sucette en bouche même dans les cas les plus grave.  `,
        imageCard:`http://localhost:3000/img/omoiCard.webp`,
        imageHistory:`http://localhost:3000/img/omoiHistory.jpg`,
        village:`Kumo`
    },

    {
        id : 33,
        nom: `Karui`,
        history:`Karui Akimichi (秋道カルイ, Akimichi Karui) est une kunoichi de Kumo, membre de l'Équipe Samui. Elle se maria plus tard avec Chôji Akimichi et s'installa à Konoha, devenant ainsi une membre du clan Akimichi. Karui est très impulsive et se dispute souvent avec Omoï. Elle a beaucoup de respect pour Killer Bee et est prête à tout pour le retrouver. Malgré ses colères monstres, elle se soucie des autres et même de Naruto après l'avoir passé à tabac.Ses disputes avec Omoï viennent de leurs caractères différents : Karui est souvent énervée par les exagérations imaginatives d'Omoï et elle sort de ses gonds lorsqu'il a tendance à être trop franc avec elle (concernant sa poitrine ou la possibilité qu'un homme veuille d'elle par exemple), finissant souvent par le frapper. `,
        imageCard:`http://localhost:3000/img/karuiCard.webp`,
        imageHistory:`http://localhost:3000/img/karuiHistory.jpg`,
        village:`Kumo`
    },

    {
        id : 34,
        nom: `Mabui`,
        history:`Mabui (マブイ, Mabui) était une kunoichi et l'assistante d'A, le Quatrième Raikage. Elle transmettait ses ordres au reste du village de Kumo. Elle restait calme dans les situations stressantes et remplissait immédiatement les tâches qu'on lui donnait. En outre, elle, comme Darui, semblait être très contrariée à chaque fois que le Raikage abîmait le mobilier. Mabui possédait une technique unique qui lui permet de transférer des matières sur de longues distances à la vitesse de la lumière. C'est pour cette technique qu'elle a été l'assistante du Raikage. Suite à l'affrontement entre Sasuke Uchiwa et Killer B, le Raikage la chargea de s'arranger pour organiser un Sommet des Kage. Au retour du Raikage et de son frère B à Kumo, elle félicita toute l'équipe s'étant rendue au Sommet et demanda des informations sur l’événement. Elle fut présente lors de la réunion de l'Alliance Shinobi aux côtés de A.Elle fut présente avec le Raikage lorsque le rapport faisant état des ennemis s'opposant à la Première et la Quatrième Division leur parvint.Lorsqu'ils apprirent que Kinkaku utilisait le manteau de Kyûbi, Mabui utilisa sa technique et envoya le Kohaku no jôhei à Darui qui l'utilisa avec l'aide du trio Ino-Shika-Chô pour sceller Kinkaku. Lors de cette guerre, elle resta uniquement dans le Quartier Général (qui se situe dans le Pays de la Foudre) qui fut attaqué par Jûbi et son Orbe des Démons à Queues. `,
        imageCard:`http://localhost:3000/img/mabuiCard.webp`,
        imageHistory:`http://localhost:3000/img/mabuiuiHistory.jpg`,
        village:`Kumo`
    },



    {
        id : 35,
        nom: `Killer B`,
        history:`Killer B (キラービー, Kirâbî, Kana : Killer Bee) est un shinobi du village de Kumo, et le jinchûriki de Gyûki, le démon à huit queues.À l'âge de cinq ans, Motoï devint le meilleur ami de B. Ils avaient inventé leur propre salut.

        Il fut choisi pour être le partenaire de A car les Raikage ont toujours eu un allié avec qui combattre et A n'avait pas de frère donc il devait chercher un partenaire avec qui il pouvait exécuter le double Lariat. Après avoir été choisi, Bee obtint son surnom « B » et forma avec A le duo A&B, c'est aussi à partir de là que A et B se considérèrent comme frères.
        
        Après que son cousin ait perdu tout contrôle sur Hachibi et qu'il ait tué le père de Motoï ainsi qu'une vingtaine d'autres personnes, Bee fut choisi pour être le nouvel hôte de Hachibi. Avant cela, A vint le voir et lui dit qu'il était une personne très importante pour lui et donna la force à B de dompter Hachibi. Mais dès lors, B endura la même haine et le même dégoût de la part des habitants de Kumo que ceux endurés par Naruto Uzumaki à Konoha. Cependant, il garda toujours le sourire et se poussa à devenir le meilleur Jinchûriki. Cependant, il continua de sourire et de faire de son mieux pour être le meilleur Jinchûriki possible afin de ne pas faire honte à son frère, A, qui se lançait dans la politique. Motoï tenta de tuer B, pensant ainsi tuer Hachibi et venger son père, mais B le désarma et ne lui en voulut pas le moins du monde pour son geste. Motoï, honteux, n'osa plus lui parler durant trente ans.[5] B partit s’entraîner avec son frère sur une ile du pays de la Foudre où se trouvent les Chutes de la Vérité. Depuis une certaine époque, B devint révéré à Kumo en tant que héros ou, comme Motoï l'appelle depuis, le Héros des Héros. Il affronta lors d'une courte bataille Minato Namikaze avec son frère A où il montra sa capacité à utiliser le Hachibi et aussi son style de combat qui impressionna fortement Minato. `,
        imageCard:`http://localhost:3000/img/killerbCard.webp`,
        imageHistory:`http://localhost:3000/img/killerbHistory.jpg`,
        village:`Kumo`
    },

    {
        id : 36,
        nom: `Yugito`,
        history:`Yugito Nii (二位ユギト, Nii Yugito) était une kunoichi du village caché de Kumo ainsi que le dernier jinchûriki du Démon Chat à Deux Queues, Matatabi. Yugito est devenue le jinchûriki de Nibi vers l'âge de deux ans, et à l'issue d'un dur et terrible entraînement lui ayant été imposé. Elle était capable de garder le contrôle d'elle-même parfaitement lors de ses transformations ainsi que de contrôler et d'utiliser l'immense chakra de son bijû, en s'harmonisant avec celui-ci.[1] Également, à un certain moment dans l'anime, Yugito accepta la mission donnée par Nekobaa consistant à récupérer les empreintes de pattes de Nibi pour l'Encyclopédie des Pattes. Yugito gagna confiance en elle au prix d'un dur travail acharné, faisant d'elle une kunoichi fière et courageuse. Cela fut montré quand elle tendit un piège à deux membres de l'Akatsuki avec elle, jurant qu'ils ne s'en sortiraient pas vivant.[4] Il fut également dit qu'elle était ferme et tranchante, n'agissant jamais dans la précipitation auprès de ses coéquipiers. Yugito était une femme à la peau claire, ayant de longs cheveux blonds lisses noués par des bandages blancs, ainsi que des yeux de couleur noirs. De plus, Yugito portait également un haut à manches court de couleur noire, ainsi qu’une pièce d’armure mauve lui enserrant le ventre et les hanches, s’arrêtant juste au-dessus de sa poitrine, ainsi qu'un pantalon de shinobi noir frappé d'un motif en forme de nuage cousu sur le bas de la jambe gauche du pantalon, et ainsi que sur le haut droit de son T-shirt. Yugito portait également des mitaines mauves ainsi que des bandages blancs lui recouvrent les chevilles et les avant-bras allant du poignet jusqu'aux manches de son vêtement. Elle portait aussi une chaîne de perles enroulée autour de son avant-bras gauche et des sandales noires de shinobi, ainsi qu'un drap rouge autour de sa taille faisant office de ceinture. Quant à son front, il était bien sûr surmonté du bandeau frontal de Kumo.`,
        imageCard:`http://localhost:3000/img/yugitoCard.webp`,
        imageHistory:`http://localhost:3000/img/yugitoHistory.jpg`,
        village:`Kumo`
    },
]

module.exports = personnages