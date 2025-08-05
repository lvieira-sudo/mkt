// Função para extrair mês do período
        function extractMonth(period) {
            const monthMap = {
                '04': 'Abril',
                '05': 'Maio', 
                '06': 'Junho',
                '07': 'Julho',
                '08': 'Agosto',
                '09': 'Setembro',
                '10': 'Outubro',
                '11': 'Novembro',
                '12': 'Dezembro',
                '01': 'Janeiro',
                '02': 'Fevereiro'
            };
            
            const dateMatch = period.match(/(\d{2})\/(\d{2})/);
            if (dateMatch) {
                const month = dateMatch[2];
                return monthMap[month] || 'N/A';
            }
            return 'N/A';
        }

        // Dados de 2025
        const data2025 = [
            {period: "22/04 A 27/04", leadsReal: 63, metaLQ: 20, lqReal: 28, qualRate: 140, interviews: 9, mat2025: 2, mat2026: 0},
            {period: "28/04 A 04/05", leadsReal: 75, metaLQ: 20, lqReal: 32, qualRate: 160, interviews: 11, mat2025: 1, mat2026: 4},
            {period: "05/05 A 11/05", leadsReal: 49, metaLQ: 25, lqReal: 20, qualRate: 80, interviews: 13, mat2025: 2, mat2026: 3},
            {period: "12/05 A 18/05", leadsReal: 74, metaLQ: 25, lqReal: 23, qualRate: 92, interviews: 22, mat2025: 1, mat2026: 4},
            {period: "19/05 A 25/05", leadsReal: 46, metaLQ: 25, lqReal: 15, qualRate: 60, interviews: 23, mat2025: 1, mat2026: 0},
            {period: "26/05 A 01/06", leadsReal: 62, metaLQ: 25, lqReal: 14, qualRate: 56, interviews: 17, mat2025: 0, mat2026: 0},
            {period: "02/06 A 08/06", leadsReal: 100, metaLQ: 30, lqReal: 20, qualRate: 67, interviews: 26, mat2025: 1, mat2026: 1},
            {period: "09/06 A 15/06", leadsReal: 100, metaLQ: 30, lqReal: 21, qualRate: 70, interviews: 24, mat2025: 0, mat2026: 7},
            {period: "16/06 A 22/06", leadsReal: 84, metaLQ: 30, lqReal: 22, qualRate: 73, interviews: 22, mat2025: 0, mat2026: 1},
            {period: "23/06 A 29/06", leadsReal: 92, metaLQ: 30, lqReal: 26, qualRate: 87, interviews: 11, mat2025: 0, mat2026: 0},
            {period: "30/06 A 06/07", leadsReal: 98, metaLQ: 30, lqReal: 22, qualRate: 73, interviews: 19, mat2025: 1, mat2026: 0},
            {period: "07/07 A 13/07", leadsReal: 97, metaLQ: 30, lqReal: 21, qualRate: 70, interviews: 18, mat2025: 3, mat2026: 4},
            {period: "14/07 A 20/07", leadsReal: 89, metaLQ: 30, lqReal: 14, qualRate: 47, interviews: 20, mat2025: 0, mat2026: 12},
            {period: "21/07 A 27/07", leadsReal: 15, metaLQ: 30, lqReal: 6, qualRate: 20, interviews: 15, mat2025: 0, mat2026: 6},
            {period: "28/07 A 03/08", leadsReal: 20, metaLQ: 30, lqReal: 8, qualRate: 27, interviews: 13, mat2025: 0, mat2026: 12},
            {period: "04/08 A 10/08", leadsReal: 30, metaLQ: 40, lqReal: 15, qualRate: 38, interviews: 12, mat2025: 3, mat2026: 13},
            {period: "11/08 A 17/08", leadsReal: 77, metaLQ: 40, lqReal: 23, qualRate: 58, interviews: 19, mat2025: 0, mat2026: 3},
            {period: "18/08 A 24/08", leadsReal: 138, metaLQ: 40, lqReal: 27, qualRate: 68, interviews: 12, mat2025: 0, mat2026: 18},
            {period: "25/08 A 31/08", leadsReal: 131, metaLQ: 40, lqReal: 24, qualRate: 60, interviews: 25, mat2025: 0, mat2026: 13},
            {period: "01/09 A 07/09", leadsReal: 137, metaLQ: 50, lqReal: 19, qualRate: 38, interviews: 22, mat2025: 0, mat2026: 4},
            {period: "08/09 A 14/09", leadsReal: 148, metaLQ: 50, lqReal: 12, qualRate: 24, interviews: 25, mat2025: 0, mat2026: 14},
            {period: "15/09 A 21/09", leadsReal: 122, metaLQ: 60, lqReal: 16, qualRate: 27, interviews: 15, mat2025: 0, mat2026: 3},
            {period: "22/09 A 28/09", leadsReal: 127, metaLQ: 60, lqReal: 30, qualRate: 50, interviews: 35, mat2025: 0, mat2026: 13},
            {period: "29/09 A 05/10", leadsReal: 148, metaLQ: 60, lqReal: 28, qualRate: 47, interviews: 25, mat2025: 0, mat2026: 5},
            {period: "06/10 A 12/10", leadsReal: 125, metaLQ: 60, lqReal: 41, qualRate: 68, interviews: 23, mat2025: 0, mat2026: 7},
            {period: "13/10 A 19/10", leadsReal: 264, metaLQ: 60, lqReal: 28, qualRate: 47, interviews: 27, mat2025: 0, mat2026: 14},
            {period: "20/10 A 26/10", leadsReal: 133, metaLQ: 60, lqReal: 36, qualRate: 60, interviews: 29, mat2025: 0, mat2026: 10},
            {period: "27/10 A 02/11", leadsReal: 158, metaLQ: 60, lqReal: 39, qualRate: 65, interviews: 23, mat2025: 0, mat2026: 15},
            {period: "03/11 Á 09/11", leadsReal: 109, metaLQ: 60, lqReal: 26, qualRate: 43, interviews: 19, mat2025: 0, mat2026: 15},
            {period: "10/11 A 16/11", leadsReal: 93, metaLQ: 60, lqReal: 21, qualRate: 35, interviews: 30, mat2025: 0, mat2026: 14},
            {period: "17/11 A 23/11", leadsReal: 55, metaLQ: 60, lqReal: 12, qualRate: 20, interviews: 28, mat2025: 0, mat2026: 13},
            {period: "24/11 A 30/11", leadsReal: 86, metaLQ: 60, lqReal: 10, qualRate: 17, interviews: 41, mat2025: 0, mat2026: 22},
            {period: "01/12 A 07/12", leadsReal: 98, metaLQ: 60, lqReal: 15, qualRate: 25, interviews: 29, mat2025: 0, mat2026: 11},
            {period: "08/12 A 14/12", leadsReal: 111, metaLQ: 60, lqReal: 38, qualRate: 63, interviews: 28, mat2025: 0, mat2026: 18},
            {period: "15/12 A 21/12", leadsReal: 214, metaLQ: 60, lqReal: 34, qualRate: 57, interviews: 22, mat2025: 0, mat2026: 28},
            {period: "22/12 A 28/12", leadsReal: 118, metaLQ: 60, lqReal: 9, qualRate: 15, interviews: 23, mat2025: 0, mat2026: 11},
            {period: "29/12 A 04/01", leadsReal: 102, metaLQ: 60, lqReal: 18, qualRate: 30, interviews: 23, mat2025: 0, mat2026: 9},
            {period: "05/01 A 11/01", leadsReal: 127, metaLQ: 60, lqReal: 13, qualRate: 22, interviews: 27, mat2025: 0, mat2026: 15},
            {period: "12/01 A 18/01", leadsReal: 107, metaLQ: 60, lqReal: 14, qualRate: 23, interviews: 22, mat2025: 0, mat2026: 16},
            {period: "19/01 A 25/01", leadsReal: 85, metaLQ: 60, lqReal: 12, qualRate: 20, interviews: 29, mat2025: 0, mat2026: 13},
            {period: "26/01 A 01/02", leadsReal: 119, metaLQ: 60, lqReal: 8, qualRate: 13, interviews: 25, mat2025: 0, mat2026: 6},
            {period: "02/02 A 08/02", leadsReal: 97, metaLQ: 60, lqReal: 6, qualRate: 10, interviews: 2, mat2025: 0, mat2026: 10},
            {period: "09/02 A 15/02", leadsReal: 68, metaLQ: 50, lqReal: 5, qualRate: 10, interviews: 14, mat2025: 0, mat2026: 4}
        ];

        // Dados de 2026 - Completos
        const data2026 = [
            {period: "27/04 A 03/05", leadsReal: 53, metaLQ: 20, lqReal: 13, qualRate: 65, interviews: 1, mat2025: 1, mat2026: 0, cancelados: 0},
            {period: "04/05 A 10/05", leadsReal: 49, metaLQ: 25, lqReal: 20, qualRate: 80, interviews: 5, mat2025: 2, mat2026: 1, cancelados: 0},
            {period: "11/05 A 17/05", leadsReal: 83, metaLQ: 25, lqReal: 19, qualRate: 76, interviews: 9, mat2025: 1, mat2026: 1, cancelados: 0},
            {period: "18/05 A 24/05", leadsReal: 144, metaLQ: 30, lqReal: 31, qualRate: 103, interviews: 7, mat2025: 1, mat2026: 6, cancelados: 0},
            {period: "25/05 A 31/05", leadsReal: 126, metaLQ: 30, lqReal: 29, qualRate: 97, interviews: 37, mat2025: 0, mat2026: 12, cancelados: 0},
            {period: "01/06 A 07/06", leadsReal: 178, metaLQ: 30, lqReal: 27, qualRate: 90, interviews: 22, mat2025: 1, mat2026: 7, cancelados: 0},
            {period: "08/06 A 14/06", leadsReal: 175, metaLQ: 30, lqReal: 40, qualRate: 133, interviews: 32, mat2025: 0, mat2026: 11, cancelados: 0},
            {period: "15/06 A 21/06", leadsReal: 98, metaLQ: 30, lqReal: 14, qualRate: 47, interviews: 20, mat2025: 0, mat2026: 14, cancelados: 0},
            {period: "22/06 A 28/06", leadsReal: 164, metaLQ: 30, lqReal: 16, qualRate: 53, interviews: 9, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "29/06 A 05/07", leadsReal: 256, metaLQ: 40, lqReal: 15, qualRate: 38, interviews: 13, mat2025: 1, mat2026: 12, cancelados: 0},
            {period: "06/07 A 12/07", leadsReal: 266, metaLQ: 40, lqReal: 20, qualRate: 50, interviews: 40, mat2025: 3, mat2026: 8, cancelados: 0},
            {period: "13/07 A 19/07", leadsReal: 233, metaLQ: 40, lqReal: 30, qualRate: 75, interviews: 21, mat2025: 0, mat2026: 5, cancelados: 0},
            {period: "20/07 A 26/07", leadsReal: 228, metaLQ: 40, lqReal: 30, qualRate: 75, interviews: 41, mat2025: 0, mat2026: 4, cancelados: 6},
            {period: "27/07 A 02/08", leadsReal: 226, metaLQ: 40, lqReal: 32, qualRate: 80, interviews: 0, mat2025: 0, mat2026: 13, cancelados: 0},
            // Agosto - Setembro - Outubro - Novembro - Dezembro - Janeiro - Fevereiro (sem leads realizados)
            {period: "03/08 A 09/08", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 3, mat2026: 0, cancelados: 0},
            {period: "10/08 A 16/08", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "17/08 A 23/08", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "24/08 A 30/08", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "31/08 A 06/09", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "07/09 A 13/09", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "14/09 A 20/09", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "21/09 A 27/09", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "28/09 A 04/10", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "05/10 A 11/10", leadsReal: 0, metaLQ: 40, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "12/10 A 18/10", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "19/10 A 25/10", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "26/10 A 01/11", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "02/11 Á 08/11", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "09/11 A 15/11", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "16/11 A 22/11", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "23/11 A 29/11", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "30/11 A 06/12", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "07/12 A 13/12", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "14/12 A 20/12", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "21/12 A 27/12", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "28/12 A 03/01", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "04/01 A 10/01", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "11/01 A 17/01", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "18/01 A 24/01", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "25/01 A 31/01", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "01/02 A 07/02", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "08/02 A 14/02", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "15/02 A 21/02", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0},
            {period: "22/02 A 28/02", leadsReal: 0, metaLQ: 50, lqReal: 0, qualRate: 0, interviews: 0, mat2025: 0, mat2026: 0, cancelados: 0}
        ];

        let currentYear = '2025';
        let currentFilter = 'all';

        // Inicialização dos gráficos
        let weeklyChart, funnelChart, quarterlyChart, conversionChart;

        function initCharts() {
            // Gráfico de evolução semanal
            const weeklyCtx = document.getElementById('weeklyChart').getContext('2d');
            weeklyChart = new Chart(weeklyCtx, {
                type: 'line',
                data: {
                    labels: data2025.slice(0, 20).map(d => d.period.split(' ')[0]),
                    datasets: [{
                        label: 'Leads Realizados',
                        data: data2025.slice(0, 20).map(d => d.leadsReal),
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#667eea',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 8
                    }, {
                        label: 'Leads Qualificados',
                        data: data2025.slice(0, 20).map(d => d.lqReal),
                        borderColor: '#764ba2',
                        backgroundColor: 'rgba(118, 75, 162, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#764ba2',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: '#e2e8f0',
                                font: {
                                    size: 14,
                                    weight: '600'
                                },
                                usePointStyle: true,
                                pointStyle: 'circle',
                                padding: 20
                            },
                            onHover: (event, legendItem, legend) => {
                                legend.chart.canvas.style.cursor = 'pointer';
                            },
                            onLeave: (event, legendItem, legend) => {
                                legend.chart.canvas.style.cursor = 'default';
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            titleColor: '#e2e8f0',
                            bodyColor: '#e2e8f0',
                            borderColor: '#60a5fa',
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: true,
                            callbacks: {
                                title: function(context) {
                                    return `Período: ${context[0].label}`;
                                },
                                afterBody: function(context) {
                                    const dataIndex = context[0].dataIndex;
                                    const currentData = getCurrentData();
                                    if (currentData[dataIndex]) {
                                        return [`Taxa de Qualificação: ${currentData[dataIndex].qualRate}%`, `Entrevistas: ${currentData[dataIndex].interviews}`];
                                    }
                                    return [];
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(148, 163, 184, 0.1)'
                            },
                            ticks: {
                                color: '#94a3b8'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(148, 163, 184, 0.1)'
                            },
                            ticks: {
                                color: '#94a3b8'
                            }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    }
                }
            });

            // Gráfico de funil
            const funnelCtx = document.getElementById('funnelChart').getContext('2d');
            funnelChart = new Chart(funnelCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Leads Qualificados', 'Entrevistas', 'Matrículas 2025'],
                    datasets: [{
                        data: [871, 917, 391],
                        backgroundColor: [
                            'rgba(102, 126, 234, 0.9)',
                            'rgba(118, 75, 162, 0.9)',
                            'rgba(16, 185, 129, 0.9)'
                        ],
                        borderWidth: 4,
                        borderColor: '#1e293b',
                        hoverOffset: 20,
                        hoverBorderWidth: 6,
                        hoverBorderColor: '#f8fafc',
                        hoverBackgroundColor: [
                            'rgba(102, 126, 234, 1)',
                            'rgba(118, 75, 162, 1)',
                            'rgba(16, 185, 129, 1)'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#f8fafc',
                                font: {
                                    size: 13,
                                    weight: '700',
                                    family: 'Inter'
                                },
                                usePointStyle: true,
                                pointStyle: 'circle',
                                padding: 20,
                                boxWidth: 15,
                                boxHeight: 15,
                                generateLabels: function(chart) {
                                    const data = chart.data;
                                    if (data.labels.length && data.datasets.length) {
                                        return data.labels.map((label, i) => {
                                            const value = data.datasets[0].data[i];
                                            const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                                            const percentage = ((value / total) * 100).toFixed(1);
                                            return {
                                                text: `${label}: ${value.toLocaleString()} (${percentage}%)`,
                                                fillStyle: data.datasets[0].backgroundColor[i],
                                                strokeStyle: data.datasets[0].backgroundColor[i],
                                                lineWidth: 0,
                                                pointStyle: 'circle',
                                                hidden: false,
                                                index: i
                                            };
                                        });
                                    }
                                    return [];
                                }
                            },
                            onHover: (event, legendItem, legend) => {
                                legend.chart.canvas.style.cursor = 'pointer';
                            },
                            onLeave: (event, legendItem, legend) => {
                                legend.chart.canvas.style.cursor = 'default';
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(15, 23, 42, 0.95)',
                            titleColor: '#f8fafc',
                            bodyColor: '#f8fafc',
                            borderColor: '#60a5fa',
                            borderWidth: 2,
                            cornerRadius: 12,
                            titleFont: {
                                size: 14,
                                weight: '700'
                            },
                            bodyFont: {
                                size: 13,
                                weight: '600'
                            },
                            padding: 12,
                            callbacks: {
                                title: function(context) {
                                    return `📊 ${context[0].label}`;
                                },
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.parsed;
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return `Quantidade: ${value.toLocaleString()}`;
                                },
                                afterLabel: function(context) {
                                    const value = context.parsed;
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return `Percentual: ${percentage}%`;
                                }
                            }
                        }
                    },
                    animation: {
                        animateRotate: true,
                        animateScale: true,
                        duration: 2500,
                        easing: 'easeInOutQuart'
                    },
                    cutout: '45%',
                    radius: '90%'
                }
            });

            // Gráfico trimestral
            const quarterlyCtx = document.getElementById('quarterlyChart').getContext('2d');
            quarterlyChart = new Chart(quarterlyCtx, {
                type: 'bar',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        label: 'Performance (%)',
                        data: [65, 58, 42, 35],
                        backgroundColor: [
                            'rgba(102, 126, 234, 0.8)',
                            'rgba(118, 75, 162, 0.8)',
                            'rgba(16, 185, 129, 0.8)',
                            'rgba(239, 68, 68, 0.8)'
                        ],
                        borderColor: [
                            '#667eea',
                            '#764ba2',
                            '#10b981',
                            '#ef4444'
                        ],
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                        hoverBackgroundColor: [
                            'rgba(102, 126, 234, 1)',
                            'rgba(118, 75, 162, 1)',
                            'rgba(16, 185, 129, 1)',
                            'rgba(239, 68, 68, 1)'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                color: '#e2e8f0',
                                font: {
                                    size: 12,
                                    weight: '600'
                                },
                                usePointStyle: true,
                                pointStyle: 'rect',
                                padding: 15
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            titleColor: '#e2e8f0',
                            bodyColor: '#e2e8f0',
                            borderColor: '#60a5fa',
                            borderWidth: 1,
                            cornerRadius: 8,
                            callbacks: {
                                title: function(context) {
                                    return `Trimestre: ${context[0].label}`;
                                },
                                label: function(context) {
                                    return `Performance: ${context.parsed.y}%`;
                                },
                                afterLabel: function(context) {
                                    const quarterData = getQuarterData(context.label);
                                    return [
                                        `Leads: ${quarterData.leads}`,
                                        `LQ: ${quarterData.lq}`,
                                        `Entrevistas: ${quarterData.interviews}`
                                    ];
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(148, 163, 184, 0.1)'
                            },
                            ticks: {
                                color: '#94a3b8',
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#94a3b8'
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeOutBounce'
                    }
                }
            });

            // Gráfico de conversão - Funil de vendas
            const conversionCtx = document.getElementById('conversionChart').getContext('2d');
            conversionChart = new Chart(conversionCtx, {
                type: 'bar',
                data: {
                    labels: ['Leads Totais', 'Leads Qualificados', 'Entrevistas', 'Matrículas 2025'],
                    datasets: [{
                        label: 'Quantidade',
                        data: [4391, 871, 917, 391],
                        backgroundColor: [
                            'rgba(96, 165, 250, 0.8)',
                            'rgba(167, 139, 250, 0.8)', 
                            'rgba(244, 114, 182, 0.8)',
                            'rgba(52, 211, 153, 0.8)'
                        ],
                        borderColor: [
                            '#60a5fa',
                            '#a78bfa',
                            '#f472b6', 
                            '#34d399'
                        ],
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                        hoverBackgroundColor: [
                            'rgba(96, 165, 250, 1)',
                            'rgba(167, 139, 250, 1)', 
                            'rgba(244, 114, 182, 1)',
                            'rgba(52, 211, 153, 1)'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                color: '#e2e8f0',
                                font: {
                                    size: 12,
                                    weight: '600'
                                },
                                usePointStyle: true,
                                pointStyle: 'rect',
                                padding: 15
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            titleColor: '#e2e8f0',
                            bodyColor: '#e2e8f0',
                            borderColor: '#60a5fa',
                            borderWidth: 1,
                            cornerRadius: 8,
                            callbacks: {
                                title: function(context) {
                                    return context[0].label;
                                },
                                label: function(context) {
                                    return `Quantidade: ${context.parsed.y.toLocaleString()}`;
                                },
                                afterLabel: function(context) {
                                    const data = context.dataset.data;
                                    const index = context.dataIndex;
                                    if (index > 0) {
                                        const conversion = ((data[index] / data[index - 1]) * 100).toFixed(1);
                                        return `Taxa de conversão: ${conversion}%`;
                                    }
                                    return 'Ponto de entrada do funil';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(148, 163, 184, 0.1)'
                            },
                            ticks: {
                                color: '#94a3b8',
                                callback: function(value) {
                                    return value.toLocaleString();
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#94a3b8',
                                maxRotation: 45
                            }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    }
                }
            });
        }

        // Função auxiliar para obter dados atuais
        function getCurrentData() {
            return currentYear === '2025' ? data2025 : data2026;
        }

        // Função auxiliar para obter dados por trimestre
        function getQuarterData(quarter) {
            const currentData = getCurrentData();
            let startIndex, endIndex;
            
            switch(quarter) {
                case 'Q1':
                    startIndex = 0;
                    endIndex = Math.floor(currentData.length / 4);
                    break;
                case 'Q2':
                    startIndex = Math.floor(currentData.length / 4);
                    endIndex = Math.floor(currentData.length / 2);
                    break;
                case 'Q3':
                    startIndex = Math.floor(currentData.length / 2);
                    endIndex = Math.floor(currentData.length * 3 / 4);
                    break;
                case 'Q4':
                    startIndex = Math.floor(currentData.length * 3 / 4);
                    endIndex = currentData.length;
                    break;
                default:
                    return { leads: 0, lq: 0, interviews: 0 };
            }
            
            const quarterData = currentData.slice(startIndex, endIndex);
            return {
                leads: quarterData.reduce((sum, item) => sum + item.leadsReal, 0),
                lq: quarterData.reduce((sum, item) => sum + item.lqReal, 0),
                interviews: quarterData.reduce((sum, item) => sum + item.interviews, 0)
            };
        }

        function populateTable() {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';
            
            data2025.forEach(row => {
                const tr = document.createElement('tr');
                
                let performance = 'low';
                if (row.qualRate >= 80) performance = 'high';
                else if (row.qualRate >= 50) performance = 'medium';
                
                tr.innerHTML = `
                    <td>${extractMonth(row.period)}</td>
                    <td>${row.period}</td>
                    <td>${row.leadsReal.toLocaleString()}</td>
                    <td>${row.metaLQ}</td>
                    <td>${row.lqReal}</td>
                    <td>${row.qualRate}%</td>
                    <td>${row.interviews}</td>
                    <td>${row.mat2025}</td>
                    <td>${row.mat2026}</td>
                    <td><span class="performance-indicator ${performance}">${performance.toUpperCase()}</span></td>
                `;
                
                tableBody.appendChild(tr);
            });
        }

        function toggleYear(year) {
            currentYear = year;
            
            // Atualizar botões
            document.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Atualizar dados baseado no ano selecionado
            if (year === '2025') {
                updateDashboard(data2025, '2025');
            } else if (year === '2026') {
                updateDashboard(data2026, '2026');
            } else if (year === 'comparison') {
                showComparison();
            }
        }

        function updateDashboard(data, year) {
            // Calcular totais
            const totalLeads = data.reduce((sum, item) => sum + item.leadsReal, 0);
            const totalLQ = data.reduce((sum, item) => sum + item.lqReal, 0);
            const totalInterviews = data.reduce((sum, item) => sum + item.interviews, 0);
            const totalMat2025 = data.reduce((sum, item) => sum + item.mat2025, 0);
            const totalMat2026 = data.reduce((sum, item) => sum + item.mat2026, 0);
            const avgQualRate = Math.round(data.reduce((sum, item) => sum + item.qualRate, 0) / data.length);

            // Atualizar métricas
            document.getElementById('totalLeads').textContent = totalLeads.toLocaleString();
            document.getElementById('qualifiedLeads').textContent = totalLQ.toLocaleString();
            document.getElementById('qualificationRate').textContent = avgQualRate + '%';
            document.getElementById('interviews').textContent = totalInterviews.toLocaleString();
            document.getElementById('enrollments2025').textContent = totalMat2025.toLocaleString();
            document.getElementById('enrollments2026').textContent = totalMat2026.toLocaleString();

            // Atualizar gráficos
            updateCharts(data, year);
            updateTable(data, year);
        }

        function updateCharts(data, year) {
            // Atualizar gráfico semanal
            const displayData = data.slice(0, Math.min(20, data.length));
            weeklyChart.data.labels = displayData.map(d => d.period.split(' ')[0]);
            weeklyChart.data.datasets[0].data = displayData.map(d => d.leadsReal);
            weeklyChart.data.datasets[1].data = displayData.map(d => d.lqReal);
            weeklyChart.update('active');

            // Atualizar gráfico de funil
            const totalLQ = data.reduce((sum, item) => sum + item.lqReal, 0);
            const totalInterviews = data.reduce((sum, item) => sum + item.interviews, 0);
            const totalMat2025 = data.reduce((sum, item) => sum + item.mat2025, 0);
            const totalMat2026 = data.reduce((sum, item) => sum + item.mat2026, 0);
            
            funnelChart.data.datasets[0].data = [totalLQ, totalInterviews, totalMat2026];
            funnelChart.data.labels = ['Leads Qualificados', 'Entrevistas', 'Matrículas 2026'];
            funnelChart.update('active');

            // Atualizar gráfico de funil de conversão
            const totalLeads = data.reduce((sum, item) => sum + item.leadsReal, 0);
            conversionChart.data.datasets[0].data = [totalLeads, totalLQ, totalInterviews, totalMat2026];
            conversionChart.data.labels = ['Leads Totais', 'Leads Qualificados', 'Entrevistas', 'Matrículas 2026'];
            conversionChart.update('active');
        }

        function updateTable(data, year) {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';
            
            data.forEach(row => {
                const tr = document.createElement('tr');
                
                let performance = 'low';
                if (row.qualRate >= 80) performance = 'high';
                else if (row.qualRate >= 50) performance = 'medium';
                
                tr.innerHTML = `
                    <td>${extractMonth(row.period)}</td>
                    <td>${row.period}</td>
                    <td>${row.leadsReal.toLocaleString()}</td>
                    <td>${row.metaLQ}</td>
                    <td>${row.lqReal}</td>
                    <td>${row.qualRate}%</td>
                    <td>${row.interviews}</td>
                    <td>${row.mat2025}</td>
                    <td>${row.mat2026}</td>
                    <td><span class="performance-indicator ${performance}">${performance.toUpperCase()}</span></td>
                `;
                
                tableBody.appendChild(tr);
            });
        }

        function showComparison() {
            // Criar visualização de comparação
            const comparison2025 = {
                totalLeads: data2025.reduce((sum, item) => sum + item.leadsReal, 0),
                totalLQ: data2025.reduce((sum, item) => sum + item.lqReal, 0),
                totalInterviews: data2025.reduce((sum, item) => sum + item.interviews, 0),
                totalMat: data2025.reduce((sum, item) => sum + (item.mat2025 || 0), 0)
            };

            const comparison2026 = {
                totalLeads: data2026.reduce((sum, item) => sum + item.leadsReal, 0),
                totalLQ: data2026.reduce((sum, item) => sum + item.lqReal, 0),
                totalInterviews: data2026.reduce((sum, item) => sum + item.interviews, 0),
                totalMat: data2026.reduce((sum, item) => sum + (item.mat2026 || 0), 0)
            };

            // Atualizar métricas com comparação
            const leadsDiff = ((comparison2026.totalLeads - comparison2025.totalLeads) / comparison2025.totalLeads * 100).toFixed(1);
            const lqDiff = ((comparison2026.totalLQ - comparison2025.totalLQ) / comparison2025.totalLQ * 100).toFixed(1);
            
            document.getElementById('totalLeads').textContent = `${comparison2026.totalLeads.toLocaleString()} vs ${comparison2025.totalLeads.toLocaleString()}`;
            document.getElementById('qualifiedLeads').textContent = `${comparison2026.totalLQ.toLocaleString()} vs ${comparison2025.totalLQ.toLocaleString()}`;
            
            // Atualizar gráfico de comparação
            weeklyChart.data.labels = ['2025', '2026'];
            weeklyChart.data.datasets[0].data = [comparison2025.totalLeads, comparison2026.totalLeads];
            weeklyChart.data.datasets[1].data = [comparison2025.totalLQ, comparison2026.totalLQ];
            weeklyChart.update('active');
        }

        function filterPeriod(period) {
            currentFilter = period;
            
            // Atualizar botões
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Aplicar filtro baseado no período
            const currentData = getCurrentData();
            let filteredData = currentData;
            
            if (period !== 'all') {
                let startIndex, endIndex;
                
                switch(period) {
                    case 'q1':
                        startIndex = 0;
                        endIndex = Math.floor(currentData.length / 4);
                        break;
                    case 'q2':
                        startIndex = Math.floor(currentData.length / 4);
                        endIndex = Math.floor(currentData.length / 2);
                        break;
                    case 'q3':
                        startIndex = Math.floor(currentData.length / 2);
                        endIndex = Math.floor(currentData.length * 3 / 4);
                        break;
                    case 'q4':
                        startIndex = Math.floor(currentData.length * 3 / 4);
                        endIndex = currentData.length;
                        break;
                }
                
                filteredData = currentData.slice(startIndex, endIndex);
            }
            
            // Atualizar métricas com dados filtrados
            updateMetricsWithFilteredData(filteredData);
            
            // Atualizar gráficos com dados filtrados
            updateChartsWithFilteredData(filteredData);
            
            // Atualizar tabela com dados filtrados
            updateTableWithFilteredData(filteredData);
        }

        function updateMetricsWithFilteredData(data) {
            const totalLeads = data.reduce((sum, item) => sum + item.leadsReal, 0);
            const totalLQ = data.reduce((sum, item) => sum + item.lqReal, 0);
            const totalInterviews = data.reduce((sum, item) => sum + item.interviews, 0);
            const totalMat2025 = data.reduce((sum, item) => sum + item.mat2025, 0);
            const totalMat2026 = data.reduce((sum, item) => sum + item.mat2026, 0);
            const avgQualRate = data.length > 0 ? Math.round(data.reduce((sum, item) => sum + item.qualRate, 0) / data.length) : 0;

            document.getElementById('totalLeads').textContent = totalLeads.toLocaleString();
            document.getElementById('qualifiedLeads').textContent = totalLQ.toLocaleString();
            document.getElementById('qualificationRate').textContent = avgQualRate + '%';
            document.getElementById('interviews').textContent = totalInterviews.toLocaleString();
            document.getElementById('enrollments2025').textContent = totalMat2025.toLocaleString();
            document.getElementById('enrollments2026').textContent = totalMat2026.toLocaleString();
        }

        function updateChartsWithFilteredData(data) {
            // Atualizar gráfico semanal
            const displayData = data.slice(0, Math.min(20, data.length));
            weeklyChart.data.labels = displayData.map(d => d.period.split(' ')[0]);
            weeklyChart.data.datasets[0].data = displayData.map(d => d.leadsReal);
            weeklyChart.data.datasets[1].data = displayData.map(d => d.lqReal);
            weeklyChart.update('active');

            // Atualizar gráfico de funil
            const totalLQ = data.reduce((sum, item) => sum + item.lqReal, 0);
            const totalInterviews = data.reduce((sum, item) => sum + item.interviews, 0);
            const totalMat2026 = data.reduce((sum, item) => sum + item.mat2026, 0);
            
            funnelChart.data.datasets[0].data = [totalLQ, totalInterviews, totalMat2026];
            funnelChart.update('active');

            // Atualizar gráfico de funil de conversão
            const totalLeads = data.reduce((sum, item) => sum + item.leadsReal, 0);
            conversionChart.data.datasets[0].data = [totalLeads, totalLQ, totalInterviews, totalMat2026];
            conversionChart.update('active');
        }

        function updateTableWithFilteredData(data) {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';
            
            data.forEach(row => {
                const tr = document.createElement('tr');
                
                let performance = 'low';
                if (row.qualRate >= 80) performance = 'high';
                else if (row.qualRate >= 50) performance = 'medium';
                
                tr.innerHTML = `
                    <td>${extractMonth(row.period)}</td>
                    <td>${row.period}</td>
                    <td>${row.leadsReal.toLocaleString()}</td>
                    <td>${row.metaLQ}</td>
                    <td>${row.lqReal}</td>
                    <td>${row.qualRate}%</td>
                    <td>${row.interviews}</td>
                    <td>${row.mat2025}</td>
                    <td>${row.mat2026}</td>
                    <td><span class="performance-indicator ${performance}">${performance.toUpperCase()}</span></td>
                `;
                
                tableBody.appendChild(tr);
            });
        }

        // Animação de contadores
        function animateCounters() {
            const counters = document.querySelectorAll('.metric-value');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent.replace(/,/g, ''));
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString();
                    }
                }, 20);
            });
        }

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                initCharts();
                populateTable();
                animateCounters();
            }, 500);
        });

        // Responsividade dos gráficos
        window.addEventListener('resize', function() {
            if (weeklyChart) weeklyChart.resize();
            if (funnelChart) funnelChart.resize();
            if (quarterlyChart) quarterlyChart.resize();
            if (conversionChart) conversionChart.resize();
        });
    
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'969e5899a7faf1cd',t:'MTc1NDMxMzU2My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();