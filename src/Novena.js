import React from 'react';
import './Novena.css';

import PrayerGroup from './PrayerGroup';
import PrayerSet from './PrayerSet';
import HailMary from './HailMary';
import Reading from './Reading';

export default function (props) {
    return (
        <div>
            <h1 className="text-center">NOVENA PRAYER FOR THE COMMENDATION OF THE SOUL OF CESAR AMBION</h1>

            <h2>Opening Prayer</h2>

            <PrayerGroup>
                <PrayerSet
                    all
                    content="In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
                />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet
                    leader
                    content="Lord, open our lips to praise your holy name. Cleanse our hearts of any worthless, evil or distracting thoughts. Give us the wisdom and love necessary to pray this novena with attention, reverence and devotion, for the repose of the soul of Cesar. Father, let our prayer be heard in your presence, for it is offered through Christ Jesus our Lord."
                />
                <PrayerSet
                    all
                    content="Amen."
                />
            </PrayerGroup>

            <h2>Rosary of the Passion of our Lord Jesus Christ</h2>

            <PrayerGroup>
                <PrayerSet
                    all
                    content="I believe in God, the Father Almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father Almighty; from there He will come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting."
                />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet
                    leader
                    content="Our Father, Who art in Heaven, hallowed be Thy name; Thy Kingdom come, Thy will be done on earth as it is in Heaven."
                />
                <PrayerSet
                    all
                    content="Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil."
                />
            </PrayerGroup>

            <PrayerGroup>
                <HailMary />
                <HailMary />
                <HailMary />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet
                    leader
                    content="Eternal rest grant unto Cesar, oh, Lord."
                />
                <PrayerSet
                    all
                    content="And let perpetual light shine upon him."
                />
                <PrayerSet
                    leader
                    content="May he rest in peace."
                />
                <PrayerSet
                    all
                    content="Amen."
                />
            </PrayerGroup>

            <PrayerGroup id="decade">  
                <PrayerSet
                    leader
                    content="All powerful God, whose mercy is never withheld from those who call upon you in hope, look kindly on your servant Cesar, who departed this life confessing your name, and number him among your saints forevermore."
                />
                <PrayerSet
                    all
                    content="Amen."
                    />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet
                    leader
                    content="Merciful Jesus, through your precious blood which came as sweat at your agony in the garden of Gethsemane."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through the precious blood which you shed when you were mercilessly scourged at the pillar."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through the pain and the sorrow you felt when you were crowned with thorns."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through the insults and mockery hurled upon you when they clothed you with purple, gave you a reed as a scepter, and slapped your holy face."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through the unjust sentence of death by crucifixion imposed on you by Pontius Pilate, by which you took upon yourself the punishment of all our sins."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through the difficulty you felt when you carried the heavy burden of the cross on the way to Calvary."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through your fall during which your holy body was cruelly pressed upon the ground by the weight of the cross, and your holy face was dashed on the ground."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through the sacred wounds on your hands and feet which you received when they nailed you to the cross."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through the pains and the sorrows which you felt while hanging crucified, and your cruel death which you endured for our salvation."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
                <PrayerSet
                    leader
                    content="Merciful Jesus, through the blood and water which gushed forth from your Sacred Heart when you were pierced with a lance, that became a fountain for the cleansing of our sins."
                />
                <PrayerSet
                    all
                    content="Have mercy on Cesar, O Lord!"
                />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet
                    leader
                    content="Give Cesar eternal rest, O Lord."
                />
                <PrayerSet
                    all
                    content="And may your light shine upon him forever."
                />
                <PrayerSet
                    leader
                    content="May he rest in peace."
                />
                <PrayerSet
                    all
                    content="Amen."
                />
            </PrayerGroup>

            <p onClick={() => {document.getElementById('decade').scrollIntoView()}}>(Repeat "All Powerful God...", and "Merciful Jesus" set 5 times)</p>

            <h2>Litany</h2>

            <PrayerGroup>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Leader</div>
                    <div className="prayer-line-response">Response</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">&nbsp;</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Lord, have mercy!</div>
                    <div className="prayer-line-response">Lord, have mercy!</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Christ, have mercy!</div>
                    <div className="prayer-line-response">Christ, have mercy!</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Lord, have mercy!</div>
                    <div className="prayer-line-response">Lord, have mercy!</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">&nbsp;</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">God, our Father in heaven,</div>
                    <div className="prayer-line-response">Have mercy on him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Jesus, Son of God, Redeemer of the world,</div>
                    <div className="prayer-line-response">Have mercy on him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Holy Spirit, giver of life,</div>
                    <div className="prayer-line-response">Have mercy on him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Holy Trinity, One God,</div>
                    <div className="prayer-line-response">Have mercy on him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">&nbsp;</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Holy Mary, Mother of God,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Michael, the Archangel,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">All you holy angels of God,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint John the Baptist,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Joseph</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Peter,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Paul,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Andrew,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint John,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Mary Magdalene,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">All you holy Apostles and Disciples of the Lord</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Stephen,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saints Joachim and Ann,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Lorenzo Ruiz and all holy martyrs,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Ambrose,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saints Monica and Augustine,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Teresa,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Catherine,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Frances Cabrini,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Saint Elizabeth Seton,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">All you holy men and women,</div>
                    <div className="prayer-line-response">Pray for him.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">&nbsp;</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Christ, pardon all his faults,</div>
                    <div className="prayer-line-response">Lord, hear our prayer.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Christ remember the good he had done,</div>
                    <div className="prayer-line-response">Lord, hear our prayer.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Christ, receive all the souls of the faithful departed, especially the soul of Cesar,</div>
                    <div className="prayer-line-response">Lord, hear our prayer.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Christ, comfort all those who mourn,</div>
                    <div className="prayer-line-response">Lord, hear our prayer.</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">&nbsp;</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your coming as man,</div>
                    <div className="prayer-line-response">Lord, save Cesar</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your birth,</div>
                    <div className="prayer-line-response">Lord, save Cesar</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your baptism and fasting,</div>
                    <div className="prayer-line-response">Lord, save Cesar</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your sufferings and cross,</div>
                    <div className="prayer-line-response">Lord, save Cesar</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your death and burial,</div>
                    <div className="prayer-line-response">Lord, save Cesar</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your rising to new life,</div>
                    <div className="prayer-line-response">Lord, save Cesar    </div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your return in glory to the Father,</div>
                    <div className="prayer-line-response">Lord, save Cesar</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your gift of the Holy Spirit,</div>
                    <div className="prayer-line-response">Lord, save Cesar</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">By your coming again in glory,</div>
                    <div className="prayer-line-response">Lord, save Cesar</div>
                </div>

                <div className="prayer-line">
                    <div className="prayer-line-leader">Lord, have mercy!</div>
                    <div className="prayer-line-response">Lord, have mercy!</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Christ have mercy!</div>
                    <div className="prayer-line-response">Christ, have mercy!</div>
                </div>
                <div className="prayer-line">
                    <div className="prayer-line-leader">Lord, have mercy!</div>
                    <div className="prayer-line-response">Lord, have mercy!</div>
                </div>
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet
                    leader
                    content="Give Cesar eternal rest, O Lord."
                />
                <PrayerSet
                    all
                    content="And may your light shine upon him forever."
                />
                <PrayerSet
                    leader
                    content="May he rest in peace."
                />
                <PrayerSet
                    all
                    content="Amen."
                />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet
                    leader
                    content="With Christ there is mercy."
                />
                <PrayerSet
                    all
                    content="And fullness of redemption."
                />
                <PrayerSet
                    leader
                    content="Let us pray."
                />
                <PrayerSet
                    all
                    content="Almighty God and Father, by the mystery of the Cross, you have made us strong; by the sacrament of the resurrection you have sealed us as your own. Look kindly upon your servant, Cesar and upon all our departed brothers and sisters, who are now freed from the bonds of mortality, and count them among your saints in heaven. We ask this through Christ our Lord. Amen."
                />
            </PrayerGroup>

            <h2>Reading</h2>
            {/* <ul>
                <li>[1st Day] - Ecclesiastes 3:1-22</li>
                <li>[2nd Day] - Romans 5:5-11</li>
                <li>[3rd Day] - Romans 5:17-21</li>
                <li>[4th Day] - Romans 14:7-9,10-12</li>
                <li>[5th Day] - 1 Corinthians 15:20-24,25-28</li>
                <li>[6th Day] - 2 Corinthians 5:1, 6-10</li>
                <li>[7th Day] - 1 John 3:1-2</li>
                <li>[8th Day] - Revelation 14:13</li>
                <li>[9th Day] - Revelation 21:1-5,6-7</li>
            </ul> */}

            <PrayerSet leader>
                <Reading />
            </PrayerSet>

            <h2>Responsorial Psalm</h2>
            <PrayerGroup>
                <PrayerSet leader content="Let our response be: The Lord is my light and my salvation." />
                <PrayerSet all content="The Lord is my light and my salvation." />

                <PrayerSet leader>
                    The Lord is my light and my salvation.<br/ >
                    Whom should I fear?<br/ >
                    The Lord is my life’s refuge;<br/ >
                    Of whom should I be afraid.
                </PrayerSet>
                <PrayerSet
                    all
                    content="The Lord is my light and my salvation."
                />

                <PrayerSet leader>
                    One thing I ask of the Lord; this I seek:<br/ >
                    To dwell in the house of the Lord<br/ >
                    All the days of my life,<br/ >
                    That I may gaze on the loveliness of the Lord<br/ >
                    And contemplate his temple.
                </PrayerSet>
                <PrayerSet
                    all
                    content="The Lord is my light and my salvation."
                />

                <PrayerSet leader>
                    Hear, O Lord, the sound of my call;<br/ >
                    have pity on me, and answer me.<br/ >
                    Your presence, O Lord, I seek.<br/ >
                    Hide not your face from me.
                </PrayerSet>
                <PrayerSet
                    all
                    content="The Lord is my light and my salvation."
                />

                <PrayerSet leader>
                    I believe that I shall see the bounty of the Lord<br/ >
                    In the land of the living.<br/ >
                    Wait for the Lord with courage;<br/ >
                    Be stouthearted, and wait for the Lord.
                </PrayerSet>
                <PrayerSet
                    all
                    content="The Lord is my light and my salvation."
                />

                <PrayerSet leader>
                    Give Cesar, eternal rest, O Lord.<br/ >
                    And may your light shine upon him forever.<br/ >
                    May he rest in peace. Amen.
                </PrayerSet>
                <PrayerSet
                    all
                    content="The Lord is my light and my salvation."
                />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet leader content="Let us pray." />
                <PrayerSet 
                    all
                    content="Almighty God and Loving Father, into your hands we commend our brother Cesar. We are confident that with all who have died in Christ he will be raised to life on the last day and live with Christ forever. We thank you for all the blessings you gave him in this life to show your fatherly care for all of us and the fellowship which is ours with the saints in Jesus Christ our Lord. Amen."
                />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet leader content="May the Lord receive Cesar into His peace and raise up his body on the last day." />
                <PrayerSet 
                    all
                    content="Amen."
                />
                <PrayerSet leader content="Give him eternal rest, O Lord." />
                <PrayerSet 
                    all
                    content="And may your light shine on him forever. Amen."
                />
            </PrayerGroup>

            <PrayerGroup>
                <PrayerSet 
                    all
                    content="Hail Holy Queen, Mother of Mercy, hail our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary."
                />
                <PrayerSet leader content="Pray for us, O holy Mother of God." />
                <PrayerSet all content="That we may be made worthy of the promises of Christ."/>
                <PrayerSet leader content="Let us pray." />
                <PrayerSet all content="O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ Our Lord. Amen." />
            </PrayerGroup>

            <h3>Requiescat In Pace!</h3>
        </div>
    )
};
