let costChartInstance = null;
let comparativePlatformsChartInstance = null;

function renderCostChart() {
    const ctx = document.getElementById('costChart').getContext('2d');
    const costs = {
        linuxTipsAvulso: 3465,
        udemyAvulso: 574.70,
        gratuitoCreditos: 0,
        aluraAvulso: 2580, // Alura Anual Ultra
    };

    if (costChartInstance) {
        costChartInstance.destroy();
    }

    costChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'LinuxTips (Avulso)', 'Udemy (Avulso)', 'Assinatura Alura (Plano Anual Ultra)'
            ],
            datasets: [{
                label: 'Custo Estimado (R$)',
                data: [
                    costs.linuxTipsAvulso, costs.udemyAvulso, costs.aluraAvulso
                ],
                backgroundColor: [
                    '#2475a0', '#0b9cc8', '#27ae60'
                ],
                borderColor: [
                    '#2475a0', '#0b9cc8', '#27ae60'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR', {minimumFractionDigits: 2});
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += 'R$ ' + context.parsed.y.toLocaleString('pt-BR', {minimumFractionDigits: 2});
                            }
                            return label;
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Custos Estimados da Trilha (Aquisição Avulsa)',
                    font: {
                        size: 16
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

function renderComparativePlatformsChart() {
    const ctx = document.getElementById('comparativePlatformsChart').getContext('2d');
    const costs = {
        linuxTipsAvulso: 3465,
        udemyAvulso: 574.70,
        gratuitoCreditos: 0,
        linuxForceAvulso: 990,
        aluraAnualPlus: 1308,
        aluraAnualPro: 1788,
        aluraAnualUltra: 2580,
        rocketseatAnualPromo: 2597,
        rocketseatFormacaoDevOpsPromo: 1096.70,
        kodekloud6Meses: 994.50,
        fullCycleVitalicio: 3500, // Avg of 3408-3600
        techworldNana: 8670
    };

    if (comparativePlatformsChartInstance) {
        comparativePlatformsChartInstance.destroy();
    }

    comparativePlatformsChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'LinuxTips (Avulso)', 'Udemy (Avulso)', 'Linux Force Security',
                'Alura (Anual Plus)', 'Alura (Anual Pro)', 'Alura (Anual Ultra)',
                'Rocketseat (Anual Promo)', 'Rocketseat (Form. DevOps Promo)',
                'KodeKloud (6 Meses)', 'FullCycle 4.0 (Vitalício)', 'Techworld with Nana'
            ],
            datasets: [{
                label: 'Custo Estimado (R$)',
                data: [
                    costs.linuxTipsAvulso, costs.udemyAvulso, costs.linuxForceAvulso,
                    costs.aluraAnualPlus, costs.aluraAnualPro, costs.aluraAnualUltra,
                    costs.rocketseatAnualPromo, costs.rocketseatFormacaoDevOpsPromo,
                    costs.kodekloud6Meses, costs.fullCycleVitalicio, costs.techworldNana
                ],
                backgroundColor: [
                    '#2475a0', '#0b9cc8', '#27ae60', // LinuxTips, Udemy, Linux Force
                    '#00a896', '#00a896', '#00a896', // Alura (Vibrant Teal)
                    '#e69807', '#e69807', // Rocketseat (Amber)
                    '#8e44ad', '#e74c3c', '#f1c40f' // KodeKloud, FullCycle, Techworld with Nana (Purple, Red, Yellow)
                ],
                borderColor: [
                    '#2475a0', '#0b9cc8', '#27ae60',
                    '#00a896', '#00a896', '#00a896',
                    '#e69807', '#e69807',
                    '#8e44ad', '#e74c3c', '#f1c40f'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR', {minimumFractionDigits: 2});
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += 'R$ ' + context.parsed.y.toLocaleString('pt-BR', {minimumFractionDigits: 2});
                            }
                            return label;
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Comparativo de Custos entre Todas as Plataformas',
                    font: {
                        size: 16
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}