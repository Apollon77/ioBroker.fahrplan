/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "All": {                                         "en": "All",                                             "de": "Alle",                                            "ru": "Все",                                             "pt": "Todos",                                           "nl": "Allemaal",                                        "fr": "Tout",                                            "it": "Tutti",                                           "es": "Todas",                                           "pl": "Wszystko",                                        "zh-cn": "所有"},
    "Bycicle": {                                     "en": "Bycicle",                                         "de": "Fahrradmitnahme",                                 "ru": "Велосипедный транспорт",                          "pt": "Transporte de bicicleta",                         "nl": "Bij cyclus",                                      "fr": "Transport à vélo",                                "it": "Trasporto di biciclette",                         "es": "Transporte de bicicletas",                        "pl": "Transport rowerowy",                              "zh-cn": "自行车运输"},
    "ColorDefault": {                                "en": "Default color",                                   "de": "Standardfarben",                                  "ru": "Цвет по умолчанию",                               "pt": "Cor padrão",                                      "nl": "Standaard kleur",                                 "fr": "Couleur par défaut",                              "it": "Colore predefinito",                              "es": "Color predeterminado",                            "pl": "Kolor domyślny",                                  "zh-cn": "默认颜色"},
    "ColorDelay": {                                  "en": "Color for delays",                                "de": "Farbe für Verspätungen",                          "ru": "Цвет задержек",                                   "pt": "Cor para atrasos",                                "nl": "Kleur voor vertragingen",                         "fr": "Couleur pour les retards",                        "it": "Colore per ritardi",                              "es": "Color para retrasos",                             "pl": "Kolor na opóźnienia",                             "zh-cn": "延迟颜色"},
    "ColorOntime": {                                 "en": "Color for on time",                               "de": "Farbe für Pünktlich",                             "ru": "Цвет на время",                                   "pt": "Cor para \"no tempo\"",                           "nl": "Kleur voor op tijd",                              "fr": "Couleur à temps",                                 "it": "Colore per tempo",                                "es": "Color a tiempo",                                  "pl": "Kolor na czas",                                   "zh-cn": "准时上色"},
    "CreateHTMLHeadlines": {                         "en": "Headlines creation for HTML tables",              "de": "Überschriftenerstellung für HTML-Tabellen",       "ru": "Создание заголовков для HTML-таблиц",             "pt": "Criação de cabeçalhos para tabelas HTML",         "nl": "Koppen maken voor HTML-tabellen",                 "fr": "Création de titres pour les tableaux HTML",       "it": "Creazione di titoli per tabelle HTML",            "es": "Creación de titulares para tablas HTML",          "pl": "Tworzenie nagłówków dla tabel HTML",              "zh-cn": "HTML表的标题创建"},
    "CreateHTMLJourney": {                           "en": "Create HTML view per Journey",                    "de": "HTML-Ansicht erzeugen pro Verbindung",            "ru": "Создать HTML-представление для поездки",          "pt": "Gerar visualização HTML por conexão",             "nl": "Maak HTML-weergave per reis",                     "fr": "Créer une vue HTML par trajet",                   "it": "Crea una vista HTML per Journey",                 "es": "Crear vista HTML por viaje",                      "pl": "Utwórz widok HTML na podróż",                     "zh-cn": "按旅程创建HTML视图"},
    "CreateHTMLRoute": {                             "en": "Create HTML view for route",                      "de": "HTML-Ansicht erzeugen für Route",                 "ru": "Создать HTML-представление для маршрута",         "pt": "Criar visualização HTML para rota",               "nl": "Maak HTML-weergave voor route",                   "fr": "Créer une vue HTML pour l'itinéraire",            "it": "Crea una vista HTML per il percorso",             "es": "Crear vista HTML para ruta",                      "pl": "Utwórz widok HTML dla trasy",                     "zh-cn": "创建路线的HTML视图"},
    "DelayTime": {                                   "en": "Mark delayed after delay in minutes",             "de": "Verspätet markieren ab Verspätung in Minuten",    "ru": "Задержка после задержки в минутах",               "pt": "Marcar como atraso após x minutos",               "nl": "Markeer als vertraagd na tijd in minuten",        "fr": "Retardé après un délai en minutes",               "it": "Ritardato dopo un ritardo in minuti",             "es": "Retrasado tras retraso en minutos",               "pl": "Opóźniony po opóźnieniu w minutach",              "zh-cn": "延迟几分钟后延迟"},
    "FahrplanConfigErrorFooter": {                   "en": "<center>Changes not saved.<br/>Please fix problems and save again.</center>", "de": "<center>Änderungen nicht gespeichert.<br/>Bitte Probleme beheben und erneut speichern.</center>", "ru": "<center>Изменения не сохраняются.<br/>Пожалуйста, исправьте проблемы и сохраните снова.</center>", "pt": "<center>Alterações não salvas.<br/>Corrija os problemas e salve novamente.</center>", "nl": "<center>Wijzigingen niet opgeslagen.<br/>Los problemen op en sla opnieuw op.</center>", "fr": "<center>Modifications non enregistrées.<br/>Veuillez résoudre les problèmes et enregistrer à nouveau.</center>", "it": "<center>Modifiche non salvate.<br/>Risolvi i problemi e salva di nuovo.</center>", "es": "<center>Cambios no guardados.<br/>Solucione los problemas y vuelva a guardar.</center>", "pl": "<center>Zmiany nie zostały zapisane.<br/>Rozwiąż problemy i zapisz ponownie.</center>", "zh-cn": "<center>更改未保存。请解决问题，然后再次保存。</center>"},
    "FahrplanConfigErrorHeader": {                   "en": "<center>Configuration error detected!</center>",  "de": "<center>Konfigurationsfehler erkannt!</center>",  "ru": "<center>Обнаружена ошибка конфигурации!</center>", "pt": "<center>Erro de configuração detectado!</center>", "nl": "<center>Configuratiefout gedetecteerd!</center>", "fr": "<center>Erreur de configuration détectée!</center>", "it": "<center>Rilevato errore di configurazione!</center>", "es": "<center>¡Error de configuración detectado!</center>", "pl": "<center>Wykryto błąd konfiguracji!</center>",     "zh-cn": "<center>检测到配置错误！</center>"},
    "FahrplanConfigErrorInstance": {                 "en": "Please activate instance",                        "de": "Bitte Instanz aktivieren",                        "ru": "Пожалуйста, активируйте экземпляр",               "pt": "Por favor, ative a instância",                    "nl": "Activeer de instantie",                           "fr": "Veuillez activer l'instance",                     "it": "Si prega di attivare l'istanza",                  "es": "Activa la instancia",                             "pl": "Aktywuj instancję",                               "zh-cn": "请激活实例"},
    "FahrplanConfigErrorNoProduct": {                "en": "<center>No vehicle selected in Route %s</center>", "de": "<center>Kein Verkehrsmittel in Route %s  ausgewählt</center>", "ru": "<center>На маршруте %s  не выбран автомобиль</center>", "pt": "<center>Nenhum veículo selecionado na rota %s</center>", "nl": "<center>Geen voertuig geselecteerd in Route %s</center>", "fr": "<center>Aucun véhicule sélectionné dans l'itinéraire %s</center>", "it": "<center>Nessun veicolo selezionato nel percorso %s</center>", "es": "<center>Ningún vehículo seleccionado en la ruta %s</center>", "pl": "<center>Żaden pojazd nie został wybrany na trasie %s</center>", "zh-cn": "<center>在路线％s中未选择车辆</center>"},
    "FahrplanConfigErrorProductDepTT": {             "en": "<center>No vehicle selected in Departure Timetable %s</center>", "de": "<center>Kein Verkehrsmittel in Abfahrtstafel %s  ausgewählt</center>", "ru": "<center>В расписании отправлений %s не выбран автомобиль</center>", "pt": "<center>Nenhum veículo selecionado no horário de partida %s</center>", "nl": "<center>Geen voertuig geselecteerd in Vertrektijdschema %s</center>", "fr": "<center>Aucun véhicule sélectionné dans l’horaire de départ %s</center>", "it": "<center>Nessun veicolo selezionato nell'orario di partenza %s</center>", "es": "<center>Ningún vehículo seleccionado en el horario de salida %s</center>", "pl": "<center>Żaden pojazd nie został wybrany w rozkładzie odlotów %s</center>", "zh-cn": "<center>出发时间表％s中没有选择车辆</center>"},
    "FahrplanConfigErrorStationDepTT": {             "en": "<center>Unknown Station %s in Departure Timetable %s</center>", "de": "<center>Unbekannte Station %s in Abfahrtstafel %s</center>", "ru": "<center>Неизвестная станция %s  в расписании отправлений %s</center>", "pt": "<center>Estação desconhecida %s no horário de partida %s</center>", "nl": "<center>Onbekend station %s in vertrektijdschema %s</center>", "fr": "<center>Station %s  inconnue dans l’horaire de départ %s</center>", "it": "<center>Stazione %s  sconosciuta nell'orario di partenza %s</center>", "es": "<center>Estación desconocida %s  en el horario de salida %s</center>", "pl": "<center>Nieznana stacja %s  w rozkładzie odlotów %s</center>", "zh-cn": "<center>出发时刻表％s中的未知车站 ％s</center>"},
    "FahrplanConfigErrorStationDuplicate": {         "en": "<center>Identical Start-Station (From) and Destination-Station (To) %s in Route %s</center>", "de": "<center>Identische Startstation (Von) und Zielstation (Nach) %s in Route %s</center>", "ru": "<center>Идентичные начальная станция (от) и конечная станция (до) %s  в маршруте %s</center>", "pt": "<center>Estação de partida e estação de destino idênticas %s na rota %s</center>", "nl": "<center>Identiek startstation (van) en bestemmingsstation (naar) %s in route %s</center>", "fr": "<center>Station de départ (De) et Station de destination (A) identiques %s  dans l'itinéraire %s</center>", "it": "<center>Stazioni di partenza (da) e di destinazione (a) identiche %s  nel percorso %s</center>", "es": "<center>Estación de inicio (desde) y estación de destino (hasta) %s  idénticas en la ruta %s</center>", "pl": "<center>Identyczna stacja początkowa (z) i stacja docelowa (do) %s  na trasie %s</center>", "zh-cn": "<center>路线％s中的相同起点站（从）和终点站（至）</center>"},
    "FahrplanConfigErrorStationFrom": {              "en": "<center>Unknown Start-Station (From) %s in Route %s</center>", "de": "<center>Unbekannte Startstation (Von) %s in Route %s</center>", "ru": "<center>Неизвестная начальная станция (От) %s  на маршруте %s</center>", "pt": "<center>Estação de partida desconhecida %s na rota %s</center>", "nl": "<center>Onbekend startstation (van) %s in route %s</center>", "fr": "<center>Station de départ inconnue (de) %s  dans l'itinéraire %s</center>", "it": "<center>Stazione di partenza sconosciuta (da) %s  nel percorso %s</center>", "es": "<center>Estación de inicio desconocida (desde) %s  en la ruta %s</center>", "pl": "<center>Nieznana stacja początkowa (z) %s  na trasie %s</center>", "zh-cn": "<center>路线％s中的未知起点站（发自）％s</center>"},
    "FahrplanConfigErrorStationTo": {                "en": "<center>Unknown Destination-Station (To) %s in Route %s</center>", "de": "<center>Unbekannte Zielstation (Von) %s in Route %s</center>", "ru": "<center>Неизвестная конечная станция (к) %s  на маршруте %s</center>", "pt": "<center>Estação de destino desconhecido - %s na rota %s</center>", "nl": "<center>Onbekend bestemmingsstation (naar) %s in route %s</center>", "fr": "<center>Destination-Station (À) %s  inconnue dans l'itinéraire %s</center>", "it": "<center>Stazione di destinazione sconosciuta (verso) %s  nel percorso %s</center>", "es": "<center>Estación de destino desconocida (hasta) %s  en la ruta %s</center>", "pl": "<center>Nieznana stacja docelowa (do) %s  na trasie %s</center>", "zh-cn": "<center>路线％s中的未知目的站（至）％s</center>"},
    "FahrplanConfigErrorStationVia": {               "en": "<center>Unknown Stopover (Via) %s in Route %s</center>", "de": "<center>Unbekannte Zwischenstation (Via) %s in Route %s</center>", "ru": "<center>Неизвестная остановка (через) %s  на маршруте %s</center>", "pt": "<center>Estação de parada desconhecida %s na rota %s</center>", "nl": "<center>Onbekende tussenstop (via) %s in route %s</center>", "fr": "<center>Escale inconnue (via) %s  sur l'itinéraire %s</center>", "it": "<center>Stopover sconosciuto (tramite) %s  nel percorso %s</center>", "es": "<center>Escala desconocida (vía) %s  en la ruta %s</center>", "pl": "<center>Nieznany postój (przez) %s  na trasie %s</center>", "zh-cn": "<center>路线％s中的未知中途停留（via）％s</center>"},
    "Friday": {                                      "en": "Friday",                                          "de": "Freitag",                                         "ru": "пятница",                                         "pt": "Sexta-feira",                                     "nl": "Vrijdag",                                         "fr": "Vendredi",                                        "it": "Venerdì",                                         "es": "viernes",                                         "pl": "piątek",                                          "zh-cn": "星期五"},
    "Journey": {                                     "en": "Journey objects",                                 "de": "Reise-Objekte",                                   "ru": "Объекты путешествий",                             "pt": "Objetos de viagem",                               "nl": "Reisobjecten",                                    "fr": "Objets de voyage",                                "it": "Oggetti del viaggio",                             "es": "Objetos de viaje",                                "pl": "Obiekty podróży",                                 "zh-cn": "旅途对象"},
    "JourneySection": {                              "en": "Journey and Section objects",                     "de": "Reise- und Reiseabschnittsobjekte",               "ru": "Объекты путешествий и секций",                    "pt": "Objetos de viagem e seção",                       "nl": "Reis- en sectieobjecten",                         "fr": "Objets Journey et Section",                       "it": "Oggetti Journey e Section",                       "es": "Objetos de viaje y sección",                      "pl": "Obiekty podróży i sekcji",                        "zh-cn": "旅程和分区对象"},
    "Location": {                                    "en": "Location",                                        "de": "Ort",                                             "ru": "Расположение",                                    "pt": "Localização",                                     "nl": "Plaats",                                          "fr": "Emplacement",                                     "it": "Posizione",                                       "es": "Ubicación",                                       "pl": "Lokalizacja",                                     "zh-cn": "位置"},
    "Monday": {                                      "en": "Monday",                                          "de": "Montag",                                          "ru": "понедельник",                                     "pt": "Segunda-feira",                                   "nl": "Maandag",                                         "fr": "Lundi",                                           "it": "Lunedi",                                          "es": "lunes",                                           "pl": "poniedziałek",                                    "zh-cn": "星期一"},
    "No": {                                          "en": "No",                                              "de": "Nein",                                            "ru": "нет",                                             "pt": "Não",                                             "nl": "Nee",                                             "fr": "Non",                                             "it": "No",                                              "es": "No",                                              "pl": "Nie",                                             "zh-cn": "没有"},
    "NumDepartures": {                               "en": "Departures",                                      "de": "Abfahrten",                                       "ru": "Отправления",                                     "pt": "Partidas",                                        "nl": "Vertrek",                                         "fr": "départs",                                         "it": "Partenze",                                        "es": "Salidas",                                         "pl": "Odloty",                                          "zh-cn": "出港"},
    "Offset": {                                      "en": "Time offset",                                     "de": "Zeitversatz",                                     "ru": "Смещение времени",                                "pt": "Deslocamento de tempo",                           "nl": "Tijdverschuiving",                                "fr": "Décalage horaire",                                "it": "Differenza di fuso orario",                       "es": "Desplazamiento de tiempo",                        "pl": "Przesunięcie czasu",                              "zh-cn": "时间偏移"},
    "Provider": {                                    "en": "Provider",                                        "de": "Anbieter",                                        "ru": "поставщик",                                       "pt": "Fornecedor",                                      "nl": "Aanbieder",                                       "fr": "Fournisseur",                                     "it": "Provider",                                        "es": "Proveedor",                                       "pl": "Dostawca",                                        "zh-cn": "提供者"},
    "Saturday": {                                    "en": "Saturday",                                        "de": "Samstag",                                         "ru": "суббота",                                         "pt": "Sábado",                                          "nl": "Zaterdag",                                        "fr": "samedi",                                          "it": "Sabato",                                          "es": "sábado",                                          "pl": "sobota",                                          "zh-cn": "星期六"},
    "SaveJSON": {                                    "en": "Save JSON elements",                              "de": "JSON-Elemente speichern",                         "ru": "Сохранить элементы JSON",                         "pt": "Salvar elementos JSON",                           "nl": "Sla JSON-elementen op",                           "fr": "Enregistrer les éléments JSON",                   "it": "Salva elementi JSON",                             "es": "Guardar elementos JSON",                          "pl": "Zapisz elementy JSON",                            "zh-cn": "保存JSON元素"},
    "SaveObjects": {                                 "en": "Save detailed objects",                           "de": "Detailierte Objekte speichern",                   "ru": "Сохранить подробные объекты",                     "pt": "Salvar objetos detalhados",                       "nl": "Bewaar gedetailleerde objecten",                  "fr": "Enregistrer des objets détaillés",                "it": "Salva oggetti dettagliati",                       "es": "Guardar objetos detallados",                      "pl": "Zapisz szczegółowe obiekty",                      "zh-cn": "保存详细对象"},
    "SearchButton": {                                "en": "Search",                                          "de": "Suche",                                           "ru": "Поиск",                                           "pt": "Procurar",                                        "nl": "Zoeken",                                          "fr": "Chercher",                                        "it": "Ricerca",                                         "es": "Buscar",                                          "pl": "Szukaj",                                          "zh-cn": "搜索"},
    "StationFrom": {                                 "en": "From",                                            "de": "Von",                                             "ru": "Из",                                              "pt": "De",                                              "nl": "Van",                                             "fr": "De",                                              "it": "A partire dal",                                   "es": "De",                                              "pl": "Z",                                               "zh-cn": "从"},
    "StationFromName": {                             "en": "From (Custom Name)",                              "de": "Von (Eigener Name)",                              "ru": "От (Пользовательское имя)",                       "pt": "De (nome personalizado)",                         "nl": "Van (aangepaste naam)",                           "fr": "De (nom personnalisé)",                           "it": "Da (nome personalizzato)",                        "es": "De (nombre personalizado)",                       "pl": "Od (nazwa niestandardowa)",                       "zh-cn": "来自（自定义名称）"},
    "StationSearch": {                               "en": "Search for Station",                              "de": "Stationssuche",                                   "ru": "Поиск станции",                                   "pt": "Procurar estação",                                "nl": "Zoek naar Station",                               "fr": "Rechercher Station",                              "it": "Cerca la stazione",                               "es": "Buscar estación",                                 "pl": "Szukaj stacji",                                   "zh-cn": "搜索站"},
    "StationTo": {                                   "en": "To",                                              "de": "Nach",                                            "ru": "к",                                               "pt": "Para",                                            "nl": "Naar",                                            "fr": "À",                                               "it": "Per",                                             "es": "A",                                               "pl": "Do",                                              "zh-cn": "至"},
    "StationToName": {                               "en": "To (Custom Name)",                                "de": "Nach (Eigener Name)",                             "ru": "Кому (Пользовательское имя)",                     "pt": "Para (Nome personalizado)",                       "nl": "Aan (aangepaste naam)",                           "fr": "À (nom personnalisé)",                            "it": "A (nome personalizzato)",                         "es": "Para (nombre personalizado)",                     "pl": "Do (nazwa własna)",                               "zh-cn": "到（自定义名称）"},
    "Sunday": {                                      "en": "Sunday",                                          "de": "Sonntag",                                         "ru": "Воскресенье",                                     "pt": "Domingo",                                         "nl": "Zondag",                                          "fr": "dimanche",                                        "it": "Domenica",                                        "es": "domingo",                                         "pl": "niedziela",                                       "zh-cn": "星期日"},
    "Thursday": {                                    "en": "Thursday",                                        "de": "Donnerstag",                                      "ru": "Четверг",                                         "pt": "Quinta-feira",                                    "nl": "Donderdag",                                       "fr": "Jeudi",                                           "it": "giovedi",                                         "es": "jueves",                                          "pl": "czwartek",                                        "zh-cn": "星期四"},
    "Timetable": {                                   "en": "Timetable",                                       "de": "Zeiten",                                          "ru": "Расписание уроков",                               "pt": "Horários",                                        "nl": "Rooster",                                         "fr": "Calendrier",                                      "it": "Orario",                                          "es": "Calendario",                                      "pl": "Rozkład jazdy",                                   "zh-cn": "时间表"},
    "TimetableDelay": {                              "en": "Timetable & Delay",                               "de": "Zeiten & Verspätung",                             "ru": "Расписание уроков",                               "pt": "Horários e atrasos",                              "nl": "Rooster & Vertraging",                            "fr": "Calendrier",                                      "it": "Orario",                                          "es": "Calendario",                                      "pl": "Rozkład jazdy",                                   "zh-cn": "时间表"},
    "TimetableDelayPlatform": {                      "en": "Timetable & Delay & Platform",                    "de": "Zeiten & Verspätung & Bahnsteig",                 "ru": "Расписание и задержки и платформа",               "pt": "Horários, atraso e plataforma",                   "nl": "Tijdschema & vertraging & platform",              "fr": "Horaire et retard et plateforme",                 "it": "Orario, ritardo e piattaforma",                   "es": "Horario y retraso y plataforma",                  "pl": "Harmonogram i opóźnienia i platforma",            "zh-cn": "时间表与延误与平台"},
    "TrainType": {                                   "en": "Vehicle",                                         "de": "Verkehrsmittel",                                  "ru": "Транспортное средство",                           "pt": "Veículo",                                         "nl": "Voertuig",                                        "fr": "Véhicule",                                        "it": "Veicolo",                                         "es": "Vehículo",                                        "pl": "Pojazd",                                          "zh-cn": "车辆"},
    "Transfers": {                                   "en": "Max. transfers",                                  "de": "Max. Umstiege",                                   "ru": "максимальные переводы",                           "pt": "transferências máximas",                          "nl": "maximale transfers",                              "fr": "transferts maximum",                              "it": "trasferimenti massimi",                           "es": "transferencias máximas",                          "pl": "maksymalne transfery",                            "zh-cn": "最大转账"},
    "Tuesday": {                                     "en": "Tuesday",                                         "de": "Dienstag",                                        "ru": "вторник",                                         "pt": "terça",                                           "nl": "Dinsdag",                                         "fr": "Mardi",                                           "it": "martedì",                                         "es": "martes",                                          "pl": "wtorek",                                          "zh-cn": "星期二"},
    "UpdateInterval": {                              "en": "Update interval in minutes",                      "de": "Aktualisierungsintervall in Minuten",             "ru": "Интервал обновления в минутах",                   "pt": "Intervalo de atualização em minutos",             "nl": "Update-interval in minuten",                      "fr": "Intervalle de mise à jour en minutes",            "it": "Intervallo di aggiornamento in minuti",           "es": "Intervalo de actualización en minutos",           "pl": "Częstotliwość aktualizacji w minutach",           "zh-cn": "更新间隔（以分钟为单位）"},
    "Wednesday": {                                   "en": "Wednesday",                                       "de": "Mittwoch",                                        "ru": "среда",                                           "pt": "Quarta-feira",                                    "nl": "Woensdag",                                        "fr": "Mercredi",                                        "it": "mercoledì",                                       "es": "miércoles",                                       "pl": "środa",                                           "zh-cn": "星期三"},
    "Weekdays": {                                    "en": "Weekdays",                                        "de": "Wochentage",                                      "ru": "Будни",                                           "pt": "Dias da semana",                                  "nl": "Doordeweekse dagen",                              "fr": "Jours de la semaine",                             "it": "Giorni della settimana",                          "es": "Días laborables",                                 "pl": "Dni powszednie",                                  "zh-cn": "平日"},
    "Yes": {                                         "en": "Yes",                                             "de": "Ja",                                              "ru": "Да",                                              "pt": "sim",                                             "nl": "Ja",                                              "fr": "Oui",                                             "it": "sì",                                              "es": "si",                                              "pl": "tak",                                             "zh-cn": "是"},
    "active": {                                      "en": "Active",                                          "de": "Aktiv",                                           "ru": "активный",                                        "pt": "Ativo",                                           "nl": "Actief",                                          "fr": "actif",                                           "it": "Attivo",                                          "es": "Activo",                                          "pl": "Aktywny",                                         "zh-cn": "活性"},
    "dbfahrplan adapter settings": {                 "en": "Adapter settings for Fahrplan",                   "de": "Adaptereinstellungen für Fahrplan",               "ru": "Настройки адаптера для DBFahrplan",               "pt": "Configurações do adaptador para DBFahrplan",      "nl": "Adapterinstellingen voor Fahrplan",               "fr": "Paramètres d'adaptateur pour DBFahrplan",         "it": "Impostazioni dell'adattatore per DBFahrplan",     "es": "Ajustes del adaptador para DBFahrplan",           "pl": "Ustawienia adaptera dla DBFahrplan",              "zh-cn": "DBFahrplan的适配器设置"},
    "delays": {                                      "en": "Delay alarm",                                     "de": "Verspätungsalarm",                                "ru": "Задержка тревоги",                                "pt": "Atraso no alarme",                                "nl": "Alarm vertragen",                                 "fr": "Alarme de retard",                                "it": "Ritardo allarme",                                 "es": "Alarma de retraso",                               "pl": "Alarm opóźnienia",                                "zh-cn": "警报延迟"},
    "departplan": {                                  "en": "Planned departure",                               "de": "Geplante Abfahrt",                                "ru": "Запланированный отъезд",                          "pt": "Partida planejada",                               "nl": "Gepland vertrek",                                 "fr": "Départ prévu",                                    "it": "Partenza prevista",                               "es": "Salida planificada",                              "pl": "Planowany wyjazd",                                "zh-cn": "计划出发"},
    "departuretimetable": {                          "en": "departure timetables",                            "de": "Abfahrtstafeln",                                  "ru": "расписание отправления",                          "pt": "horário de partida",                              "nl": "vertrektijdschema",                               "fr": "horaire de départ",                               "it": "orario di partenza",                              "es": "horario de salida",                               "pl": "rozkład jazdy",                                   "zh-cn": "出发时间表"},
    "general": {                                     "en": "Settings",                                        "de": "Einstellungen",                                   "ru": "настройки",                                       "pt": "Configurações",                                   "nl": "Instellingen",                                    "fr": "Paramètres",                                      "it": "impostazioni",                                    "es": "Configuraciones",                                 "pl": "Ustawienia",                                      "zh-cn": "设定值"},
    "notistart": {                                   "en": "Notification in minutes before departure",        "de": "Benachrichtigung in Minuten vor Abfahrt",         "ru": "Уведомление за несколько минут до отправления",   "pt": "Notificação em minutos antes da partida",         "nl": "Melding binnen enkele minuten voor vertrek",      "fr": "Notification en quelques minutes avant le départ", "it": "Notifica in pochi minuti prima della partenza",   "es": "Notificación en minutos antes de la salida",      "pl": "Powiadomienie na kilka minut przed odlotem",      "zh-cn": "出发前几分钟内通知"},
    "outputid": {                                    "en": "Object for output text",                          "de": "Objekt für Ausgabetext",                          "ru": "Объект для вывода текста",                        "pt": "Objeto para texto de saída",                      "nl": "Object voor uitvoertekst",                        "fr": "Objet pour le texte de sortie",                   "it": "Oggetto per il testo di output",                  "es": "Objeto para texto de salida",                     "pl": "Obiekt dla tekstu wyjściowego",                   "zh-cn": "输出文字的对象"},
    "routes": {                                      "en": "Routes",                                          "de": "Routen",                                          "ru": "Маршруты",                                        "pt": "Rotas",                                           "nl": "Routes",                                          "fr": "Itinéraires",                                     "it": "Itinerari",                                       "es": "Rutas",                                           "pl": "Trasy",                                           "zh-cn": "路线"},
};