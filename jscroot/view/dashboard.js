const ordersCtx = document.getElementById('ordersChart').getContext('2d');
new Chart(ordersCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Orders',
            data: [10000, 15000, 12000, 17000, 14000, 16000],
            borderColor: '#ff5722',
            fill: false
        }]
    }
});

const earningsCtx = document.getElementById('earningsChart').getContext('2d');
new Chart(earningsCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Earnings',
            data: [5000, 8000, 6000, 10000, 7000, 9000],
            backgroundColor: '#ffd700'
        }]
    }
});
