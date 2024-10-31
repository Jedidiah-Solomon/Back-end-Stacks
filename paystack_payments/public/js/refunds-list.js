document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.querySelector("#refundsTable tbody");

  try {
    const response = await fetch("/refunds");
    if (!response.ok) {
      throw new Error("Failed to fetch refunds");
    }

    const refunds = await response.json();
    console.log(refunds);

    // Populate the table with refund data
    refunds.forEach((refund) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${refund.transaction}</td>
                <td>${refund.refund_channel}</td>
                <td>${refund.initiated_by}</td>
                <td>${refund.refunded_by}</td>
                <td>${refund.transaction_reference}</td>
                <td>${(refund.amount / 100).toFixed(2)} NGN</td>
                <td>${refund.status}</td>
                <td>${new Date(refund.createdAt).toLocaleDateString()}</td>
            `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching refunds:", error);
    tableBody.innerHTML =
      "<tr><td colspan='4'>Failed to load refunds.</td></tr>";
  }
});
