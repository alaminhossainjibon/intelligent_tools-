import React from 'react';

const Stats = () => {
    return (
        <div class="stats stats-vertical bg-primary grid sx:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 shadow">

            <div class="stat">
                <div class="stat-title">Visitors</div>
                <div class="stat-value">31K</div>
            </div>

            <div class="stat">
                <div class="stat-title">New Users</div>
                <div class="stat-value">4,200</div>
                <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
                <div class="stat-title">New Registers</div>
                <div class="stat-value">1,200</div>
                <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
    );
};

export default Stats;