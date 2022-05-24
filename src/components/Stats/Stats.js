import React from 'react';
import stats from '../../assets/images/stats.gif';

const Stats = () => {
    return (
        <div
            style={{

                background: `url(${stats})`,
                backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat'
            }}
            class="stats stats-vertical bg-primary grid sx:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 shadow">

            <div class="stat">
                <div class="">Visitors</div>
                <div class="stat-value">31K</div>
            </div>

            <div class="stat">
                <div class="">New Users</div>
                <div class="stat-value">4,200</div>
                <div class="">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
                <div class="">New Registers</div>
                <div class="stat-value">1,200</div>
                <div class="">↘︎ 90 (14%)</div>
            </div>

        </div>
    );
};

export default Stats;