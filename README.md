# protfolio-repo

Questo è il progetto per il mio portfolio da Front End Developer. Strutturerò questo README in 10 punti.

Ho optato a scegliere un'unica pagina (e non pagine multiple) siccome basta e avanza per i contenuti che dovevo inserirci. 
Per cominciare parlerò del Framework utilizzato

1) Il framework che ho usato è BootStrap. Questo è sicuramente un framework molto potente, soprattutto per creare pagine responsive. 
Il mio utlizzo di questo strumento, però, si limita solo a questo. Sono consapevole che Bootstrap permette di inserire componenti già fatte, come per esempio menù di navigazione
responsive.
La mia scelta di non inserire queste componenti prefatte ha tre principali motivi: ho preferito cercare di fare a mano tutto quello che potevo non solo per esercitarmi, ma
anche per avere il massimo controllo possibile datomi dalle mie capacità. Il motivo principale, però, è che utlizzare bootstrap per creare componenti direttamente nell'HTML, 
per quanto possa essere comodo, lo trovo molto confusionario. Renderebbe il mio HTML prolungato e mi risulterebbe difficile cercare le classi di cui necessito per gli stili.
Detto questo, non posso comunque negare le potenzialità di questo strumento, che uso maggiormente per controllare la componente responsive della pagina.

2) Sass
Una volta scoperto Sass, mi ci sono innammorato. La possibilità di organizzare il proprio CSS è stato un punto di svolta per me, che sono una persona che persegue 
l'organizzazione e l'ordine delle cose. Detto questo, il codice mi sembra comunque un po' confusionario, anche se ho fatto del mio meglio per dividere e commentare le
varie parti. Spero di migliorare col tempo.

3) Menù Navigazione
Grazie a bootstrap è possibile creare menù di navigazione responsive facilmente, ma dato che voglio imparare ad arrangiarmi, ho preferito cercare un'altra soluzione per una
navigazione completamente responsive. Inizialmente avevo escogitato un design che implicasse che il menù di navigazione, fisso in basso, cambiasse voci in base alla seione in ci si trova, ma ciò
non è possibile senza JavaScript, o senza dover ripetere per ogni sezione il menù nell'HTML. Ho provato ad implementare quest'ultima opzione ma a fronte di "bellezza" non ne 
valeva la pena, e quindi ho optato per una soluzione più semplice, sfruttando il fatto che la pagina non contiene così tanti contenuti. 
In futuro cosidererò sicuramente su come impostare meglio la faccenda.

4) Home
La prima pagina è quella che ha variazioni più anticonvenzionali dal punto di vista del responsive. Il menù di navigazione, per device mobili, non collassa, ma si espande in 
altezza, permettendomi di creare un design per le voci che tenga conto di spazio negativo e in generale più gradevole agli occhi. Questo è uno stratagemma che ho dovuto 
escogitare per via delle mie mancanze di conoscenza di JavaScript. 
In generale ho preferito non impostare subito la mia foto sulla prima pagina, siccome in vari video ho notato che a volte non è visto così bene, e quindi ho optato per 
inserirla nella sezione bio. 
Per quando riguarda la home, ho inserito semplicemente il nome, un sottotitolo e le icone social. Anche quest'ultime cambiano orientamento in base al device per motivi 
di design: volevo marcare una certa differenza tra visualizzazione della pagina tra i dispositivi per creare un'esperienza di fruibilità più particolare rispetto al solito 
"dall'alto verso il basso". 

5) Progetti
Questa è la sezione più importante del progetto, siccome sarà la raccolta dei miei lavori futuri. Ho voluto lasciarla abbastanza semplice, ma di inserire anche un qualcosa 
di accattivante, come le icone overlay sull'immagine per i link. Non so quanto sia considerato avanzato dai professionisti questo dettaglio, ma io ne vado piuttosto fiero. 

6) Bio
Sinceramente, nella bio non ho voluto inserire moltissimo, perchè guardando video ho notato che una descrizione lunga non è vista benissimo. Ho quindi steso un testo abbastanza 
breve ed ho voluto concentrarmi sui valori che mi caratterizzano tramite un'animazione che catturi l'occhio dell'osservatore. Spero di esserci riuscito.

7) Contatti
In questa sezione purtroppo, con le mie conoscenze attuali, il contact form non funziona. Ho deciso di inserirlo comunque perchè so che spesso, il mailto non è visto bene da 
chi revisiona il portfolio, e quindi preferisco porre da subito le basi per una best practice che sistemerò in futuro non appena avrò le capacità necessarie.
Per sistemare parzialmente il problema, ho deciso di piproporre i link ai social dai quali posso essere contattato.

8) Animazioni
Ho voluto cercare di rendere la pagina più interessante proponendo delle animazioni che, seppur semplici, mi hanno permesso di capire un bel po' di concetti avanzati
come i @keyframes. Spero di essere riuscito nel mio intento.

9) Ottimizzazioni
Ho cercato il più possibile di ottimizzare il mio codice, cercando di ridurre parti rindondanti, elementi e container futili. Proporio per questo ho impostato in Sass anche la
creazione di un foglio di stile minificato che inserisco direttamente nell'HTML.
L'unico "rimpianto" è che non sono riuscito a capire bene come ottimizzare le immagini inserite, siccome il metodo srcset sembra essere utlizzato se si conosce la larghezza 
esatta del contenitore, ma il ho impostato tutto il percentuale e in relazione, cercando di evitare maggiormente di impostare px fissi.

10) In futuro
In futuro sicuramente ritornerò sui miei passi, più consapevole dei miei errori e di quello che devo sistemare, di novità da implementare. Per primi in lista vorrei riuscire a 
creare un menà di navigazione come avevo inteso nel primo design, vorrei sicuramente sistemare il contactform, e vorrei riuscire a creare delle interazioni particolari come 
animazioni in base allo scroll dell'utente.

