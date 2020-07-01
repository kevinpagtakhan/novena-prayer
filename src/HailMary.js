import * as React from 'react';
import PrayerSet from './PrayerSet';

export default function() {
    return (
        <React.Fragment>
            <PrayerSet
                leader
                content="Hail Mary, Full of Grace, The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus."
            />
            <PrayerSet
                all
                content="Holy Mary, Mother of God, pray for us sinners now, and at the hour of death."
            />
        </React.Fragment>
    );
}
