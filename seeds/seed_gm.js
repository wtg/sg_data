'use strict'

module.exports = connection => connection.sync().then(() => connection.model('person').bulkCreate([
    { rcsId: "albert_m_harper", name: "Albert M. Harper" },
    { rcsId: "frank_j_hearne", name: "Frank J. Hearne" },
    { rcsId: "virgil_g_bogue", name: "Virgil G. Bogue" },
    { rcsId: "john_pierpoint", name: "John Pierpoint" },
    { rcsId: "thomas_on_morris", name: "Thomas O’N. Morris" },
    { rcsId: "george_c_macgregor", name: "George C. MacGregor" },
    { rcsId: "david_reeves", name: "David Reeves" },
    { rcsId: "daniel_a_tompkins", name: "Daniel A. Tompkins" },
    { rcsId: "james_n_caldwell", name: "James N. Caldwell" },
    { rcsId: "william_l_fox", name: "William L. Fox" },
    { rcsId: "morris_s_verner", name: "Morris S. Verner" },
    { rcsId: "coddington_billings_jr", name: "Coddington Billings, Jr." },
    { rcsId: "george_s_davison", name: "George S. Davison" },
    { rcsId: "robert_r_bridgers", name: "Robert R. Bridgers" },
    { rcsId: "frederick_s_young", name: "Frederick S. Young" },
    { rcsId: "thomas_d_whistler", name: "Thomas D. Whistler" },
    { rcsId: "independence_grove", name: "Independence Grove" },
    { rcsId: "robert_j_pratt", name: "Robert J. Pratt" },
    { rcsId: "william_a_aycrigg", name: "William A. Aycrigg" },
    { rcsId: "leverett_s_miller", name: "Leverett S. Miller" },
    { rcsId: "james_e_larrowe", name: "James E. Larrowe" },
    { rcsId: "edward_b_ashby", name: "Edward B. Ashby" },
    { rcsId: "halsey_b_pomeroy", name: "Halsey B. Pomeroy" },
    { rcsId: "james_m_africa", name: "James M. Africa" },
    { rcsId: "paul_o_hebert", name: "Paul O. Hebert" },
    { rcsId: "william_easby_jr", name: "William Easby, Jr." },
    { rcsId: "athol_m_miller", name: "Athol M. Miller" },
    { rcsId: "henry_b_voorhees", name: "Henry B. Voorhees" },
    { rcsId: "charles_j_mcdonough", name: "Charles J. McDonough" },
    { rcsId: "thomas_r_lawson", name: "Thomas R. Lawson" },
    { rcsId: "gustave_a_keller", name: "Gustave A. Keller" },
    { rcsId: "parley_l_williams_jr", name: "Parley L. Williams, Jr." },
    { rcsId: "james_w_davis", name: "James W. Davis" },
    { rcsId: "william_h_young", name: "William H. Young" },
    { rcsId: "edward_w_banker", name: "Edward W. Banker" },
    { rcsId: "homer_g_whitmore", name: "Homer G. Whitmore" },
    { rcsId: "cuyler_w_lush", name: "Cuyler W. Lush" },
    { rcsId: "william_s_lozier", name: "William S. Lozier" },
    { rcsId: "herman_s_chalfant", name: "Herman S. Chalfant" },
    { rcsId: "horace_w_rinearson", name: "Horace W. Rinearson" },
    { rcsId: "robert_a_searle", name: "Robert A. Searle" },
    { rcsId: "carl_w_schedler_jr", name: "Carl W. Schedler, Jr." },
    { rcsId: "james_t_ganson", name: "James T. Ganson" },
    { rcsId: "frank_b_watkins", name: "Frank B. Watkins" },
    { rcsId: "edward_dp_gross", name: "Edward D.P. Gross" },
    { rcsId: "philip_c_rummel_jr", name: "Philip C. Rummel, Jr." },
    { rcsId: "glenn_w_tisdal", name: "Glenn W. Tisdal" },
    { rcsId: "john_h_howard", name: "John H. Howard" },
    { rcsId: "walter_l_johnson_jr", name: "Walter L. Johnson, Jr." },
    { rcsId: "harry_f_parrott", name: "Harry F. Parrott" },
    { rcsId: "newell_l_nussbaumer", name: "Newell L. Nussbaumer" },
    { rcsId: "john_van_n_richards", name: "John Van N. Richards" },
    { rcsId: "john_s_thompson", name: "John S. Thompson" },
    { rcsId: "neal_d_howard", name: "Neal D. Howard" },
    { rcsId: "gardner_s_staunton", name: "Gardner S. Staunton" },
    { rcsId: "william_m_stilwell_jr", name: "William M. Stilwell, Jr." },
    { rcsId: "george_v_robbins", name: "George V. Robbins" },
    { rcsId: "h_fuller_stearns", name: "H. Fuller Stearns" },
    { rcsId: "marvin_h_anderson", name: "Marvin H. Anderson" },
    { rcsId: "james_m_robbins", name: "James M. Robbins" },
    { rcsId: "bernard_f_wade", name: "Bernard F. Wade" },
    { rcsId: "edward_p_kennedy", name: "Edward P. Kennedy" },
    { rcsId: "richard_e_warren", name: "Richard E. Warren" },
    { rcsId: "meredith_h_thompson", name: "Meredith H. Thompson" },
    { rcsId: "howard_h_disbrow", name: "Howard H. Disbrow" },
    { rcsId: "carl_h_wunnenberg", name: "Carl H. Wunnenberg" },
    { rcsId: "j_russell_schwarting", name: "J. Russell Schwarting" },
    { rcsId: "walter_f_powers_jr", name: "Walter F. Powers, Jr." },
    { rcsId: "richard_v_anderson", name: "Richard V. Anderson" },
    { rcsId: "king_ward", name: "King Ward" },
    { rcsId: "eustace_p_hetzel", name: "Eustace P. Hetzel" },
    { rcsId: "henry_t_moeckel", name: "Henry T. Moeckel" },
    { rcsId: "frank_j_sherry", name: "Frank J. Sherry" },
    { rcsId: "w_lambert_hawks", name: "W. Lambert Hawks" },
    { rcsId: "allen_r_stokke", name: "Allen R. Stokke" },
    { rcsId: "jack_v_richards", name: "Jack V. Richards" },
    { rcsId: "william_d_peace", name: "William D. Peace" },
    { rcsId: "frank_p_waters", name: "Frank P. Waters" },
    { rcsId: "richard_l_mclaughlin", name: "Richard L. McLaughlin" },
    { rcsId: "ronald_f_ball", name: "Ronald F. Ball" },
    { rcsId: "daymon_e_jordan", name: "Daymon E. Jordan" },
    { rcsId: "gerald_s_ellsworth", name: "Gerald S. Ellsworth" },
    { rcsId: "gibson_w_smith", name: "Gibson W. Smith" },
    { rcsId: "william_f_payne", name: "William F. Payne" },
    { rcsId: "geraldo_o_penna", name: "Geraldo O. Penna" },
    { rcsId: "glenn_o_brown", name: "Glenn O. Brown" },
    { rcsId: "robert_w_fox", name: "Robert W. Fox" },
    { rcsId: "larry_o_edwards", name: "Larry O. Edwards" },
    { rcsId: "david_r_murphy", name: "David R. Murphy" },
    { rcsId: "james_f_morgan", name: "James F. Morgan" },
    { rcsId: "david_e_lord", name: "David E. Lord" },
    { rcsId: "william_j_murdoch_jr", name: "William J. Murdoch, Jr." },
    { rcsId: "j_gregory_crozier", name: "J. Gregory Crozier" },
    { rcsId: "gary_b_garofalo", name: "Gary B. Garofalo" },
    { rcsId: "michael_d_spear", name: "Michael D. Spear" },
    { rcsId: "gordon_n_mcintosh", name: "Gordon N. McIntosh" },
    { rcsId: "charles_h_harper", name: "Charles H. Harper" },
    { rcsId: "dolf_h_beil", name: "Dolf H. Beil" },
    { rcsId: "kenneth_a_ullman", name: "Kenneth A. Ullman" },
    { rcsId: "alan_p_hald", name: "Alan P. Hald" },
    { rcsId: "zachary_i_levine", name: "Zachary I. Levine" },
    { rcsId: "w_scott_staruch", name: "W. Scott Staruch" },
    { rcsId: "mark_p_rice", name: "Mark P. Rice" },
    { rcsId: "thomas_j_engellenner", name: "Thomas J. Engellenner" },
    { rcsId: "robert_j_koch", name: "Robert J. Koch" },
    { rcsId: "ross_b_gingrich_", name: "Ross B. Gingrich " },
    { rcsId: "donald_michael_stull", name: "Donald Michael Stull" },
    { rcsId: "gordon_e_michaels", name: "Gordon E. Michaels" },
    { rcsId: "ira_s_tackel", name: "Ira S. Tackel" },
    { rcsId: "mark_r_feinstein", name: "Mark R. Feinstein" },
    { rcsId: "john_a_malitoris", name: "John A. Malitoris" },
    { rcsId: "paul_j_kowalczyk", name: "Paul J. Kowalczyk" },
    { rcsId: "william_p_duggan", name: "William P. Duggan" },
    { rcsId: "peter_traversy", name: "Peter Traversy" },
    { rcsId: "jeffry_a_langan", name: "Jeffry A. Langan" },
    { rcsId: "james_e_laposta", name: "James E. LaPosta" },
    { rcsId: "mary_p_garrity", name: "Mary P. Garrity" },
    { rcsId: "richard_e_glassberg", name: "Richard E. Glassberg" },
    { rcsId: "john_h_cerveny", name: "John H. Cerveny" },
    { rcsId: "catherine_eckart", name: "Catherine Eckart" },
    { rcsId: "douglas_k_mackechnie", name: "Douglas K. MacKechnie" },
    { rcsId: "david_a_sovie", name: "David A. Sovie" },
    { rcsId: "eric_m_lambiaso", name: "Eric M. Lambiaso" },
    { rcsId: "david_w_oconnor", name: "David W. O’Connor" },
    { rcsId: "mark_n_fellenz", name: "Mark N. Fellenz" },
    { rcsId: "william_a_wheeler", name: "William A. Wheeler" },
    { rcsId: "kristen_delvental", name: "Kristen Delvental" },
    { rcsId: "sandeep_jandial", name: "Sandeep Jandial" },
    { rcsId: "greg_waters", name: "Greg Waters" },
    { rcsId: "kristen_trout", name: "Kristen Trout" },
    { rcsId: "mamani_datta", name: "Mamani Datta" },
    { rcsId: "erica_kulesza", name: "Erica Kulesza" },
    { rcsId: "eric_schmidt", name: "Eric Schmidt" },
    { rcsId: "joseph_greco", name: "Joseph Greco" },
    { rcsId: "gil_valadez", name: "Gil Valadez" },
    { rcsId: "chris_mather", name: "Chris Mather" },
    { rcsId: "michael_c_borzumate", name: "Michael C. Borzumate" },
    { rcsId: "michael_dillon", name: "Michael Dillon" },
    { rcsId: "max_yates", name: "Max Yates" },
    { rcsId: "carlos_perea", name: "Carlos Perea" },
    { rcsId: "julia_leusner", name: "Julia Leusner" },
    { rcsId: "kara_chesal", name: "Kara Chesal" },
    { rcsId: "michael_f_zwack", name: "Michael F. Zwack" },
    { rcsId: "benjamin_s_hunt", name: "Benjamin S. Hunt" },
    { rcsId: "lee_sharma", name: "Lee Sharma" },
    { rcsId: "brownr13", name: "Russell Brown" },
    { rcsId: "daik", name: "Kevin Dai" },
    { rcsId: "ccarl", name: "Charles Carletta Jr." },
    { rcsId: "keragk", name: "Kyle Keraga" },
    { rcsId: "flowem", name: "Marcus Flowers" }
]).then(() => connection.model('membership').bulkCreate([
    { personRcsId: "albert_m_harper", name: "1st Grand Marshal", startDate: "1865-01-01", endDate: "1866-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "frank_j_hearne", name: "2nd Grand Marshal", startDate: "1866-01-01", endDate: "1867-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "virgil_g_bogue", name: "3rd Grand Marshal", startDate: "1867-01-01", endDate: "1868-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "john_pierpoint", name: "4th Grand Marshal", startDate: "1868-01-01", endDate: "1869-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "thomas_on_morris", name: "5th Grand Marshal", startDate: "1869-01-01", endDate: "1870-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "george_c_macgregor", name: "6th Grand Marshal", startDate: "1870-01-01", endDate: "1871-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "david_reeves", name: "7th Grand Marshal", startDate: "1871-01-01", endDate: "1872-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "daniel_a_tompkins", name: "8th Grand Marshal", startDate: "1872-01-01", endDate: "1873-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "james_n_caldwell", name: "9th Grand Marshal", startDate: "1873-01-01", endDate: "1874-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_l_fox", name: "10th Grand Marshal", startDate: "1874-01-01", endDate: "1875-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "morris_s_verner", name: "11st Grand Marshal", startDate: "1875-01-01", endDate: "1876-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "coddington_billings_jr", name: "12nd Grand Marshal", startDate: "1876-01-01", endDate: "1877-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "george_s_davison", name: "13rd Grand Marshal", startDate: "1877-01-01", endDate: "1878-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "robert_r_bridgers", name: "14th Grand Marshal", startDate: "1878-01-01", endDate: "1879-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "frederick_s_young", name: "15th Grand Marshal", startDate: "1879-01-01", endDate: "1880-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "thomas_d_whistler", name: "16th Grand Marshal", startDate: "1880-01-01", endDate: "1881-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "independence_grove", name: "17th Grand Marshal", startDate: "1881-01-01", endDate: "1882-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "robert_j_pratt", name: "18th Grand Marshal", startDate: "1882-01-01", endDate: "1883-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_a_aycrigg", name: "19th Grand Marshal", startDate: "1883-01-01", endDate: "1884-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "leverett_s_miller", name: "20th Grand Marshal", startDate: "1884-01-01", endDate: "1885-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "james_e_larrowe", name: "21st Grand Marshal", startDate: "1885-01-01", endDate: "1886-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "edward_b_ashby", name: "22nd Grand Marshal", startDate: "1886-01-01", endDate: "1886-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "halsey_b_pomeroy", name: "23rd Grand Marshal", startDate: "1886-01-01", endDate: "1887-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "james_m_africa", name: "24th Grand Marshal", startDate: "1887-01-01", endDate: "1888-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "paul_o_hebert", name: "25th Grand Marshal", startDate: "1888-01-01", endDate: "1889-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_easby_jr", name: "26th Grand Marshal", startDate: "1889-01-01", endDate: "1890-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "athol_m_miller", name: "27th Grand Marshal", startDate: "1894-01-01", endDate: "1895-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "henry_b_voorhees", name: "28th Grand Marshal", startDate: "1895-01-01", endDate: "1896-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "charles_j_mcdonough", name: "29th Grand Marshal", startDate: "1896-01-01", endDate: "1897-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "thomas_r_lawson", name: "30th Grand Marshal", startDate: "1897-01-01", endDate: "1898-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "gustave_a_keller", name: "31st Grand Marshal", startDate: "1898-01-01", endDate: "1899-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "parley_l_williams_jr", name: "32nd Grand Marshal", startDate: "1899-01-01", endDate: "1800-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "james_w_davis", name: "33rd Grand Marshal", startDate: "1900-01-01", endDate: "1901-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_h_young", name: "34th Grand Marshal", startDate: "1901-01-01", endDate: "1902-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "edward_w_banker", name: "35th Grand Marshal", startDate: "1902-01-01", endDate: "1903-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "homer_g_whitmore", name: "36th Grand Marshal", startDate: "1903-01-01", endDate: "1904-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "cuyler_w_lush", name: "37th Grand Marshal", startDate: "1904-01-01", endDate: "1905-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_s_lozier", name: "38th Grand Marshal", startDate: "1905-01-01", endDate: "1906-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "herman_s_chalfant", name: "39th Grand Marshal", startDate: "1906-01-01", endDate: "1907-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "horace_w_rinearson", name: "40th Grand Marshal", startDate: "1907-01-01", endDate: "1908-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "robert_a_searle", name: "41st Grand Marshal", startDate: "1908-01-01", endDate: "1909-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "carl_w_schedler_jr", name: "42nd Grand Marshal", startDate: "1909-01-01", endDate: "1910-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "james_t_ganson", name: "43rd Grand Marshal", startDate: "1910-01-01", endDate: "1911-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "frank_b_watkins", name: "44th Grand Marshal", startDate: "1911-01-01", endDate: "1912-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "edward_dp_gross", name: "45th Grand Marshal", startDate: "1912-01-01", endDate: "1913-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "philip_c_rummel_jr", name: "46th Grand Marshal", startDate: "1913-01-01", endDate: "1914-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "glenn_w_tisdal", name: "47th Grand Marshal", startDate: "1914-01-01", endDate: "1915-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "john_h_howard", name: "48th Grand Marshal", startDate: "1915-01-01", endDate: "1916-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "walter_l_johnson_jr", name: "49th Grand Marshal", startDate: "1916-01-01", endDate: "1917-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "harry_f_parrott", name: "50th Grand Marshal", startDate: "1917-01-01", endDate: "1918-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "newell_l_nussbaumer", name: "51st Grand Marshal", startDate: "1918-01-01", endDate: "1919-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "john_van_n_richards", name: "52nd Grand Marshal", startDate: "1919-01-01", endDate: "1920-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "john_s_thompson", name: "53rd Grand Marshal", startDate: "1920-01-01", endDate: "1921-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "neal_d_howard", name: "54th Grand Marshal", startDate: "1921-01-01", endDate: "1922-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "gardner_s_staunton", name: "55th Grand Marshal", startDate: "1922-01-01", endDate: "1923-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_m_stilwell_jr", name: "56th Grand Marshal", startDate: "1923-01-01", endDate: "1924-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "george_v_robbins", name: "57th Grand Marshal", startDate: "1924-01-01", endDate: "1925-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "h_fuller_stearns", name: "58th Grand Marshal", startDate: "1925-01-01", endDate: "1926-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "marvin_h_anderson", name: "59th Grand Marshal", startDate: "1926-01-01", endDate: "1927-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "james_m_robbins", name: "60th Grand Marshal", startDate: "1927-01-01", endDate: "1928-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "bernard_f_wade", name: "61st Grand Marshal", startDate: "1928-01-01", endDate: "1929-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "edward_p_kennedy", name: "62nd Grand Marshal", startDate: "1929-01-01", endDate: "1930-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "richard_e_warren", name: "63rd Grand Marshal", startDate: "1930-01-01", endDate: "1931-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "meredith_h_thompson", name: "64th Grand Marshal", startDate: "1931-01-01", endDate: "1932-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "howard_h_disbrow", name: "65th Grand Marshal", startDate: "1932-01-01", endDate: "1933-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "carl_h_wunnenberg", name: "66th Grand Marshal", startDate: "1933-01-01", endDate: "1934-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "j_russell_schwarting", name: "67th Grand Marshal", startDate: "1934-01-01", endDate: "1935-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "walter_f_powers_jr", name: "68th Grand Marshal", startDate: "1935-01-01", endDate: "1936-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "richard_v_anderson", name: "69th Grand Marshal", startDate: "1936-01-01", endDate: "1937-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "king_ward", name: "70th Grand Marshal", startDate: "1937-01-01", endDate: "1938-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "eustace_p_hetzel", name: "71st Grand Marshal", startDate: "1938-01-01", endDate: "1939-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "henry_t_moeckel", name: "72nd Grand Marshal", startDate: "1939-01-01", endDate: "1940-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "frank_j_sherry", name: "73rd Grand Marshal", startDate: "1940-01-01", endDate: "1941-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "w_lambert_hawks", name: "74th Grand Marshal", startDate: "1941-01-01", endDate: "1942-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "allen_r_stokke", name: "75th Grand Marshal", startDate: "1942-01-01", endDate: "1942-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "jack_v_richards", name: "76th Grand Marshal", startDate: "1942-01-01", endDate: "1943-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_d_peace", name: "77th Grand Marshal", startDate: "1943-01-01", endDate: "1944-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "frank_p_waters", name: "78th Grand Marshal", startDate: "1945-01-01", endDate: "1946-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "richard_l_mclaughlin", name: "79th Grand Marshal", startDate: "1946-01-01", endDate: "1947-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "ronald_f_ball", name: "80th Grand Marshal", startDate: "1947-01-01", endDate: "1948-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "daymon_e_jordan", name: "81st Grand Marshal", startDate: "1948-01-01", endDate: "1949-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "gerald_s_ellsworth", name: "82nd Grand Marshal", startDate: "1949-01-01", endDate: "1950-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "gibson_w_smith", name: "83rd Grand Marshal", startDate: "1950-01-01", endDate: "1951-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_f_payne", name: "84th Grand Marshal", startDate: "1951-01-01", endDate: "1952-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "geraldo_o_penna", name: "85th Grand Marshal", startDate: "1952-01-01", endDate: "1953-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "glenn_o_brown", name: "86th Grand Marshal", startDate: "1953-01-01", endDate: "1954-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "robert_w_fox", name: "87th Grand Marshal", startDate: "1954-01-01", endDate: "1955-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "larry_o_edwards", name: "88th Grand Marshal", startDate: "1955-01-01", endDate: "1956-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "david_r_murphy", name: "89th Grand Marshal", startDate: "1956-01-01", endDate: "1957-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "james_f_morgan", name: "90th Grand Marshal", startDate: "1957-01-01", endDate: "1958-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "david_e_lord", name: "91st Grand Marshal", startDate: "1958-01-01", endDate: "1959-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "william_j_murdoch_jr", name: "92nd Grand Marshal", startDate: "1959-01-01", endDate: "1960-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "j_gregory_crozier", name: "93rd Grand Marshal", startDate: "1960-01-01", endDate: "1961-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "gary_b_garofalo", name: "94th Grand Marshal", startDate: "1961-01-01", endDate: "1962-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "michael_d_spear", name: "95th Grand Marshal", startDate: "1962-01-01", endDate: "1963-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "gordon_n_mcintosh", name: "96th Grand Marshal", startDate: "1963-01-01", endDate: "1964-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "charles_h_harper", name: "97th Grand Marshal", startDate: "1964-01-01", endDate: "1965-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "dolf_h_beil", name: "98th Grand Marshal", startDate: "1965-01-01", endDate: "1966-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "kenneth_a_ullman", name: "99th Grand Marshal", startDate: "1966-01-01", endDate: "1967-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "alan_p_hald", name: "100th Grand Marshal", startDate: "1967-01-01", endDate: "1968-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "zachary_i_levine", name: "101st Grand Marshal", startDate: "1968-01-01", endDate: "1969-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "w_scott_staruch", name: "102nd Grand Marshal", startDate: "1969-01-01", endDate: "1970-01-01", positionId: 1, yearOnly: true },
    { personRcsId: "mark_p_rice", name: "103rd Grand Marshal", startDate: "1970-01-01", endDate: "1971-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '01' },
    { personRcsId: "thomas_j_engellenner", name: "104th Grand Marshal", startDate: "1971-01-01", endDate: "1972-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '02' },
    { personRcsId: "robert_j_koch", name: "105th Grand Marshal", startDate: "1972-01-01", endDate: "1973-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '03' },
    { personRcsId: "ross_b_gingrich_", name: "106th Grand Marshal", startDate: "1973-01-01", endDate: "1974-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '04' },
    { personRcsId: "donald_michael_stull", name: "107th Grand Marshal", startDate: "1974-01-01", endDate: "1975-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '05' },
    { personRcsId: "gordon_e_michaels", name: "108th Grand Marshal", startDate: "1975-01-01", endDate: "1976-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '06' },
    { personRcsId: "ira_s_tackel", name: "109th Grand Marshal", startDate: "1976-01-01", endDate: "1977-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '07' },
    { personRcsId: "mark_r_feinstein", name: "110th Grand Marshal", startDate: "1977-01-01", endDate: "1978-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '08' },
    { personRcsId: "john_a_malitoris", name: "111st Grand Marshal", startDate: "1978-01-01", endDate: "1979-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '09' },
    { personRcsId: "paul_j_kowalczyk", name: "112nd Grand Marshal", startDate: "1979-01-01", endDate: "1980-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '10' },
    { personRcsId: "william_p_duggan", name: "113rd Grand Marshal", startDate: "1980-01-01", endDate: "1981-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '11' },
    { personRcsId: "peter_traversy", name: "114th Grand Marshal", startDate: "1981-01-01", endDate: "1982-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '12' },
    { personRcsId: "jeffry_a_langan", name: "115th Grand Marshal", startDate: "1982-01-01", endDate: "1982-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '13' },
    { personRcsId: "james_e_laposta", name: "116th Grand Marshal", startDate: "1982-01-01", endDate: "1983-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '13' },
    { personRcsId: "mary_p_garrity", name: "117th Grand Marshal", startDate: "1983-01-01", endDate: "1984-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '14' },
    { personRcsId: "richard_e_glassberg", name: "118th Grand Marshal", startDate: "1984-01-01", endDate: "1985-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '15' },
    { personRcsId: "john_h_cerveny", name: "119th Grand Marshal", startDate: "1985-01-01", endDate: "1986-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '16' },
    { personRcsId: "catherine_eckart", name: "120th Grand Marshal", startDate: "1986-01-01", endDate: "1987-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '17' },
    { personRcsId: "douglas_k_mackechnie", name: "121st Grand Marshal", startDate: "1987-01-01", endDate: "1988-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '18' },
    { personRcsId: "david_a_sovie", name: "122nd Grand Marshal", startDate: "1988-01-01", endDate: "1989-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '19' },
    { personRcsId: "eric_m_lambiaso", name: "123rd Grand Marshal", startDate: "1989-01-01", endDate: "1990-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '20' },
    { personRcsId: "david_w_oconnor", name: "124th Grand Marshal", startDate: "1990-01-01", endDate: "1991-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '21' },
    { personRcsId: "mark_n_fellenz", name: "125th Grand Marshal", startDate: "1991-01-01", endDate: "1992-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '22' },
    { personRcsId: "william_a_wheeler", name: "126th Grand Marshal", startDate: "1992-01-01", endDate: "1993-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '23' },
    { personRcsId: "kristen_delvental", name: "127th Grand Marshal", startDate: "1993-01-01", endDate: "1994-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '24' },
    { personRcsId: "sandeep_jandial", name: "128th Grand Marshal", startDate: "1994-01-01", endDate: "1995-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '25' },
    { personRcsId: "greg_waters", name: "129th Grand Marshal", startDate: "1995-01-01", endDate: "1996-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '26' },
    { personRcsId: "kristen_trout", name: "130th Grand Marshal", startDate: "1996-01-01", endDate: "1997-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '27' },
    { personRcsId: "mamani_datta", name: "131st Grand Marshal", startDate: "1997-01-01", endDate: "1998-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '28' },
    { personRcsId: "erica_kulesza", name: "132nd Grand Marshal", startDate: "1998-01-01", endDate: "1999-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '29' },
    { personRcsId: "eric_schmidt", name: "133rd Grand Marshal", startDate: "1999-01-01", endDate: "2000-01-01", positionId: 1, yearOnly: true, bodyUniqueId: 'senate', sessionUniqueId: '30' },
    { personRcsId: "joseph_greco", name: "134th Grand Marshal", startDate: "2000-04-01", endDate: "2001-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '31' },
    { personRcsId: "gil_valadez", name: "135th Grand Marshal", startDate: "2001-04-01", endDate: "2002-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '32' },
    { personRcsId: "chris_mather", name: "136th Grand Marshal", startDate: "2002-04-01", endDate: "2003-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '33' },
    { personRcsId: "michael_c_borzumate", name: "137th Grand Marshal", startDate: "2003-04-01", endDate: "2004-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '34' },
    { personRcsId: "michael_dillon", name: "138th Grand Marshal", startDate: "2004-04-01", endDate: "2005-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '35' },
    { personRcsId: "max_yates", name: "139th Grand Marshal", startDate: "2005-04-01", endDate: "2006-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '36' },
    { personRcsId: "carlos_perea", name: "140th Grand Marshal", startDate: "2006-04-01", endDate: "2007-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '37' },
    { personRcsId: "julia_leusner", name: "141st Grand Marshal", startDate: "2007-04-01", endDate: "2008-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '38' },
    { personRcsId: "kara_chesal", name: "142nd Grand Marshal", startDate: "2008-04-01", endDate: "2009-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '39' },
    { personRcsId: "michael_f_zwack", name: "143rd Grand Marshal", startDate: "2009-04-01", endDate: "2010-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '40' },
    { personRcsId: "benjamin_s_hunt", name: "144th Grand Marshal", startDate: "2010-04-01", endDate: "2011-04-01", positionId: 1 , bodyUniqueId: 'senate', sessionUniqueId: '41'},
    { personRcsId: "lee_sharma", name: "145th Grand Marshal", startDate: "2011-04-01", endDate: "2012-01-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '42' },
    { personRcsId: "brownr13", name: "146th Grand Marshal", startDate: "2012-02-01", endDate: "2012-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '42' },
    { personRcsId: "daik", name: "147th Grand Marshal", startDate: "2012-04-01", endDate: "2013-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '43' },
    { personRcsId: "ccarl", name: "148th Grand Marshal", startDate: "2013-04-01", endDate: "2014-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '44' },
    { personRcsId: "keragk", name: "149th Grand Marshal", startDate: "2014-04-01", endDate: "2015-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '45' },
    { personRcsId: "flowem", name: "150th Grand Marshal", startDate: "2015-04-01", endDate: "2016-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '46' },
    { personRcsId: "ilorip", name: "151st Grand Marshal", startDate: "2016-04-15", endDate: "2017-04-07", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '47' },
    { personRcsId: "etzinj", name: "152nd Grand Marshal", startDate: "2017-04-07", endDate: "2018-04-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '48' },
    { personRcsId: "warnes3", name: "153rd Grand Marshal", startDate: "2018-04-01", endDate: "2019-03-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '49' },
    { personRcsId: "lettkm", name: "154th Grand Marshal", startDate: "2019-03-01", endDate: "2020-05-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '50' },
    { personRcsId: "naraya5", name: "155th Grand Marshal", startDate: "2020-05-01", positionId: 1, bodyUniqueId: 'senate', sessionUniqueId: '51' }
])));
